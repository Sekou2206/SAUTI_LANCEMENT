(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  $$('.year').forEach(n => { n.textContent = new Date().getFullYear(); });

  const nav = $('#nav');
  const burger = $('#burger');
  const menu = $('#menu');
  const setMenu = open => {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    document.body.classList.toggle('menu-open', open);
  };
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape' && document.body.classList.contains('menu-open')) { setMenu(false); burger.focus(); } });
  matchMedia('(min-width: 901px)').addEventListener('change', e => e.matches && setMenu(false));

  const zones = $$('[data-nav]');
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

  const items = $$('.reveal');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    items.forEach(n => n.classList.add('in'));
  } else {
    const io = new IntersectionObserver(list => list.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    items.forEach(n => io.observe(n));
  }
})();
