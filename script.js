(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const t = k => (window.anzaT ? window.anzaT(k) : '');
  $$('.year').forEach(n => { n.textContent = new Date().getFullYear(); });

  const nav = $('#nav');
  const burger = $('#burger');
  const menu = $('#menu');
  if (burger && menu) {
    const setMenu = open => {
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', t(open ? 'menu.close' : 'menu.open') || burger.getAttribute('aria-label'));
      document.body.classList.toggle('menu-open', open);
    };
    burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
    $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
    addEventListener('keydown', e => { if (e.key === 'Escape' && document.body.classList.contains('menu-open')) { setMenu(false); burger.focus(); } });
    matchMedia('(min-width: 901px)').addEventListener('change', e => e.matches && setMenu(false));
  }

  const zones = $$('[data-nav]');
  if (nav && zones.length && !document.body.classList.contains('legal-page')) {
    let queued = false;
    const update = () => {
      queued = false;
      const y = nav.offsetHeight / 2;
      const zone = zones.find(z => { const r = z.getBoundingClientRect(); return r.top <= y && r.bottom > y; });
      if (zone) nav.classList.toggle('is-light', zone.dataset.nav === 'light');
      nav.classList.toggle('is-scrolled', scrollY > 8);
    };
    addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener('resize', update);
    update();
  }

  const pickers = [];
  $$('[data-tabs]').forEach(box => {
    const tabs = $$('[role=tab]', box);
    const desc = document.createElement('p');
    desc.className = 'tool-desc';
    desc.setAttribute('aria-live', 'polite');
    box.insertBefore(desc, $('.tool-shot', box));
    let current = tabs[0];
    const pick = b => {
      current = b;
      tabs.forEach(x => {
        const on = x === b;
        x.setAttribute('aria-selected', String(on));
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
      desc.textContent = $('span', b).textContent;
    };
    tabs.forEach((b, i) => {
      b.addEventListener('click', () => pick(b));
      b.addEventListener('keydown', e => {
        const d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
        if (d) { e.preventDefault(); const n = tabs[(i + d + tabs.length) % tabs.length]; pick(n); n.focus(); }
      });
    });
    pick(tabs[0]);
    pickers.push(() => pick(current));
  });
  document.addEventListener('anza:lang', () => {
    pickers.forEach(f => f());
    if (burger) burger.setAttribute('aria-label', t(burger.getAttribute('aria-expanded') === 'true' ? 'menu.close' : 'menu.open'));
  });

  const items = $$('.reveal');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    items.forEach(n => n.classList.add('in'));
  } else {
    const io = new IntersectionObserver(list => list.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    items.forEach(n => io.observe(n));
  }
})();
