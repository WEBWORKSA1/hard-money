/* Hard.Money — site runtime (vanilla, no dependencies) */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Contact routing (address never appears in markup) ---------- */
  var K = 'bW9jLmxpYW1nQDFhc2tyb3diZXc=';
  function inbox() { try { return atob(K).split('').reverse().join(''); } catch (e) { return ''; } }
  function endpoint() { return 'https://formsubmit.co/ajax/' + inbox(); }

  /* ---------- Nav ---------- */
  var burger = $('.burger'), nav = $('.nav');
  if (burger && nav) burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  /* ---------- Cookie / consent notice ---------- */
  var ck = $('.cookie');
  if (ck) {
    try { if (!localStorage.getItem('hm_consent')) ck.classList.add('show'); } catch (e) { ck.classList.add('show'); }
    $$('[data-consent]', ck).forEach(function (b) {
      b.addEventListener('click', function () {
        try { localStorage.setItem('hm_consent', b.getAttribute('data-consent')); } catch (e) {}
        ck.classList.remove('show');
      });
    });
  }

  /* ---------- Lazy YouTube embeds ---------- */
  $$('.video[data-yt]').forEach(function (v) {
    v.addEventListener('click', function () {
      var id = v.getAttribute('data-yt');
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.allowFullscreen = true;
      f.title = v.getAttribute('data-title') || 'Video';
      v.innerHTML = '';
      v.appendChild(f);
    }, { once: true });
  });

  /* ---------- Forms (all forms post via AJAX to the hidden inbox) ---------- */
  function serialize(form) {
    var o = {}; var fd = new FormData(form);
    fd.forEach(function (v, k) { if (o[k] !== undefined) { o[k] = [].concat(o[k], v); } else { o[k] = v; } });
    return o;
  }
  $$('form[data-hm]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var msg = $('.form-msg', form) || form.appendChild(Object.assign(document.createElement('div'), { className: 'form-msg' }));
      var hp = $('input[name="_honey"]', form);
      if (hp && hp.value) { return; }
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var btn = $('button[type="submit"]', form); var old = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      var data = serialize(form);
      data._subject = '[Hard.Money] ' + (form.getAttribute('data-hm') || 'Form') + (data.loan_type ? ' — ' + data.loan_type : '');
      data._template = 'table';
      data._captcha = 'false';
      data.page = location.href;
      data.submitted_at = new Date().toISOString();
      fetch(endpoint(), { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { return r.json().catch(function () { return { success: r.ok }; }); })
        .then(function (j) {
          if (j && (j.success === true || j.success === 'true' || /success|activate|confirm/i.test(JSON.stringify(j)))) {
            var next = form.getAttribute('data-next');
            if (next) { location.href = next; return; }
            msg.className = 'form-msg ok'; msg.textContent = 'Received. We’ll get back to you shortly.'; form.reset();
          } else { throw new Error('bad'); }
        })
        .catch(function () {
          msg.className = 'form-msg err';
          msg.textContent = 'Something went wrong sending this. Please try again in a moment.';
        })
        .finally(function () { if (btn) { btn.disabled = false; btn.textContent = old; } });
    });
  });

  /* ---------- Multi-step lead form ---------- */
  var ms = $('[data-multistep]');
  if (ms) {
    var steps = $$('.step', ms), bars = $$('.steps i', ms), i = 0;
    function show(n) {
      i = Math.max(0, Math.min(steps.length - 1, n));
      steps.forEach(function (s, k) { s.classList.toggle('on', k === i); });
      bars.forEach(function (b, k) { b.classList.toggle('on', k <= i); });
      var first = $('input,select,textarea', steps[i]); if (first && window.innerWidth > 720) first.focus();
      ms.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      estimate();
    }
    function valid(step) {
      var ok = true;
      $$('input,select,textarea', step).forEach(function (el) { if (!el.checkValidity()) { ok = false; } });
      if (!ok) { var inv = $(':invalid', step); if (inv) inv.reportValidity(); }
      var radios = $$('input[type=radio][required]', step);
      if (radios.length && !radios.some(function (r) { return r.checked; })) { ok = false; alert('Please choose an option to continue.'); }
      return ok;
    }
    $$('[data-next-step]', ms).forEach(function (b) { b.addEventListener('click', function () { if (valid(steps[i])) show(i + 1); }); });
    $$('[data-prev-step]', ms).forEach(function (b) { b.addEventListener('click', function () { show(i - 1); }); });
    $$('.chip input', ms).forEach(function (r) { r.addEventListener('change', function () { if (r.type === 'radio' && r.closest('.step').getAttribute('data-auto') !== null) setTimeout(function () { show(i + 1); }, 180); }); });
    function num(name) { var el = $('[name="' + name + '"]', ms); return el ? parseFloat(String(el.value).replace(/[^0-9.]/g, '')) || 0 : 0; }
    function estimate() {
      var box = $('.estimate', ms); if (!box) return;
      var price = num('purchase_price'), rehab = num('rehab_budget'), arv = num('arv');
      if (!price) { box.style.display = 'none'; return; }
      var ltc = 0.9, maxLoan = Math.min((price + rehab) * ltc, arv ? arv * 0.7 : Infinity);
      var low = Math.round(maxLoan * 0.85 / 1000) * 1000, high = Math.round(maxLoan / 1000) * 1000;
      if (!isFinite(high) || high <= 0) { box.style.display = 'none'; return; }
      box.style.display = 'block';
      box.innerHTML = 'Indicative range for this deal: <b>$' + low.toLocaleString() + '</b> – <b>$' + high.toLocaleString() + '</b> (up to ~90% of cost and ~70% of ARV). Final terms are set by the lender.';
    }
    $$('input', ms).forEach(function (el) { el.addEventListener('input', estimate); });
    show(0);
  }

  /* ---------- Lender directory filter ---------- */
  var dir = $('[data-directory]');
  if (dir) {
    var cards = $$('.lender', dir), count = $('.count', dir), sel = $$('select,input', $('.filters'));
    function apply() {
      var st = ($('[name=f_state]') || {}).value || '', lt = ($('[name=f_type]') || {}).value || '', amt = parseFloat(($('[name=f_amount]') || {}).value) || 0, q = (($('[name=f_q]') || {}).value || '').toLowerCase();
      var n = 0;
      cards.forEach(function (c) {
        var ok = true;
        var states = c.getAttribute('data-states') || '';
        if (st && !(states === 'ALL' || states.split(',').indexOf(st) > -1)) ok = false;
        if (lt && (c.getAttribute('data-types') || '').split(',').indexOf(lt) < 0) ok = false;
        if (amt) { var mn = +c.getAttribute('data-min') || 0, mx = +c.getAttribute('data-max') || Infinity; if (amt < mn || amt > mx) ok = false; }
        if (q && c.textContent.toLowerCase().indexOf(q) < 0) ok = false;
        c.style.display = ok ? '' : 'none'; if (ok) n++;
      });
      if (count) count.textContent = n + ' lender' + (n === 1 ? '' : 's') + ' match your filters';
    }
    sel.forEach(function (s) { s.addEventListener('input', apply); s.addEventListener('change', apply); });
    var p = new URLSearchParams(location.search);
    if (p.get('state') && $('[name=f_state]')) $('[name=f_state]').value = p.get('state');
    if (p.get('type') && $('[name=f_type]')) $('[name=f_type]').value = p.get('type');
    apply();
  }

  /* ---------- Calculators ---------- */
  var fmt = function (n) { return (n < 0 ? '-' : '') + '$' + Math.abs(Math.round(n)).toLocaleString(); };
  var pct = function (n) { return (Math.round(n * 10) / 10).toFixed(1) + '%'; };
  function bind(id, fn) { var f = document.getElementById(id); if (!f) return; var run = function () { var o = {}; $$('input,select', f).forEach(function (el) { o[el.name] = parseFloat(el.value) || 0; var out = $('output[for="' + el.id + '"]', f); if (out) out.value = el.getAttribute('data-fmt') === 'pct' ? el.value + '%' : (el.getAttribute('data-fmt') === 'mo' ? el.value + ' mo' : fmt(+el.value)); }); fn(o, f); }; $$('input,select', f).forEach(function (el) { el.addEventListener('input', run); }); run(); }
  function set(f, k, v, cls) { var scope = f.closest('.calc') || document; var el = $('[data-out="' + k + '"]', scope); if (el) { el.textContent = v; if (cls !== undefined) el.className = cls; } }

  bind('calc-loan', function (o, f) {
    var loan = o.amount, r = o.rate / 100 / 12, pts = o.points / 100 * loan, m = o.term;
    var interest = loan * r * m, monthly = loan * r;
    var fees = o.fees || 0, total = interest + pts + fees;
    set(f, 'monthly', fmt(monthly)); set(f, 'points', fmt(pts)); set(f, 'interest', fmt(interest)); set(f, 'fees', fmt(fees)); set(f, 'total', fmt(total)); set(f, 'payoff', fmt(loan + monthly));
    var apr = m ? ((total / loan) / (m / 12)) * 100 : 0; set(f, 'apr', pct(apr));
  });

  bind('calc-flip', function (o, f) {
    var cost = o.price + o.rehab, loan = Math.min(cost * (o.ltc / 100), o.arv * (o.ltv / 100)), down = cost - loan;
    var interest = loan * (o.rate / 100 / 12) * o.months, pts = loan * (o.points / 100);
    var holding = (o.holding || 0) * o.months, selling = o.arv * (o.selling / 100), closing = o.closing || 0;
    var totalCost = cost + interest + pts + holding + selling + closing, profit = o.arv - totalCost;
    var cashIn = down + interest + pts + holding + closing, roi = cashIn ? profit / cashIn * 100 : 0, annual = o.months ? roi * 12 / o.months : 0;
    set(f, 'loan', fmt(loan)); set(f, 'down', fmt(down)); set(f, 'interest', fmt(interest)); set(f, 'points', fmt(pts)); set(f, 'holding', fmt(holding)); set(f, 'selling', fmt(selling + closing)); set(f, 'cost', fmt(totalCost));
    set(f, 'profit', fmt(profit), profit >= 0 ? 'big pos' : 'big neg'); set(f, 'roi', pct(roi)); set(f, 'annual', pct(annual)); set(f, 'rule', fmt(o.arv * 0.7 - o.rehab));
  });

  bind('calc-arv', function (o, f) {
    var arv = o.arv, maxLoan = arv * (o.ltv / 100), need = o.price + o.rehab, gap = need - maxLoan;
    set(f, 'max', fmt(maxLoan)); set(f, 'need', fmt(need)); set(f, 'gap', fmt(Math.max(0, gap))); set(f, 'ltc', need ? pct(maxLoan / need * 100) : '—'); set(f, 'mao', fmt(arv * 0.7 - o.rehab));
  });

  bind('calc-dscr', function (o, f) {
    var noi = (o.rent * 12) - (o.taxes + o.insurance + o.hoa + (o.rent * 12 * (o.vacancy / 100)) + (o.rent * 12 * (o.mgmt / 100)));
    var r = o.rate / 100 / 12, n = 360, pmt = o.loan * r / (1 - Math.pow(1 + r, -n)), debt = pmt * 12;
    var dscr = debt ? noi / debt : 0;
    set(f, 'noi', fmt(noi)); set(f, 'pmt', fmt(pmt)); set(f, 'debt', fmt(debt)); set(f, 'dscr', dscr.toFixed(2), dscr >= 1.25 ? 'big pos' : (dscr >= 1 ? 'big' : 'big neg'));
    set(f, 'verdict', dscr >= 1.25 ? 'Strong — most DSCR lenders will like this.' : dscr >= 1.0 ? 'Marginal — expect a higher rate or lower leverage.' : 'Below 1.0 — reduce the loan or raise rent.');
  });

  /* ---------- Glossary jump + search ---------- */
  var gs = $('[data-glossary-search]');
  if (gs) gs.addEventListener('input', function () { var q = gs.value.toLowerCase(); $$('.term').forEach(function (t) { t.style.display = t.textContent.toLowerCase().indexOf(q) > -1 ? '' : 'none'; }); });

  /* ---------- Year ---------- */
  $$('[data-year]').forEach(function (y) { y.textContent = new Date().getFullYear(); });
})();
