const $ = s => document.querySelector(s),
  $$ = s => document.querySelectorAll(s)
const header = $('.header')
window.addEventListener(
  'scroll',
  () => header.classList.toggle('scrolled', scrollY > 30),
  { passive: true }
)

const menu = $('.menu'),
  nav = $('.nav')
menu?.addEventListener('click', () => nav.classList.toggle('open'))
$$('.nav a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
)

const obs = new IntersectionObserver(
  es =>
    es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show')
        obs.unobserve(e.target)
      }
    }),
  { threshold: 0.12 }
)

$$('.reveal').forEach(e => obs.observe(e))
// $('#year').textContent = new Date().getFullYear()
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const dot = $('.cursor-dot'),
  ring = $('.cursor-ring')
if (matchMedia('(pointer:fine)').matches) {
  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px'
    dot.style.top = e.clientY + 'px'
    ring.animate(
      { left: e.clientX + 'px', top: e.clientY + 'px' },
      { duration: 450, fill: 'forwards' }
    )
  })

  $$('a,button,.case,.skill-cloud span').forEach(el => {
    el.addEventListener('mouseenter', () =>
      document.body.classList.add('cursor-hover')
    )
    el.addEventListener('mouseleave', () =>
      document.body.classList.remove('cursor-hover')
    )
  })
} else {
  dot.style.display = ring.style.display = 'none'
}

// $$('.magnetic').forEach(el =>
//   el
//     .addEventListener('mousemove', e => {
//       const r = el.getBoundingClientRect(),
//         x = e.clientX - r.left - r.width / 2,
//         y = e.clientY - r.top - r.height / 2
//       el.style.transform = `translate(${x * 0.12}px,${y * 0.12}px)`
//     })
//     .bind(null)
// )

// $$('.magnetic').forEach(el =>
//   el.addEventListener('mouseleave', () => (el.style.transform = ''))
// )

// IPALIT MULA LINE 54 HANGGANG LINE 67:
$$('.magnetic').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect(),
          x = e.clientX - r.left - r.width / 2,
          y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.12}px,${y * 0.12}px)`;
  });
});

$$('.magnetic').forEach(el => {
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});


document.addEventListener('mousemove', e => {
  const x = e.clientX / innerWidth - 0.5,
    y = e.clientY / innerHeight - 0.5
  $('.hero-visual')?.style.setProperty(
    'transform',
    `translate(${x * 8}px,${y * 8}px)`
  )
})


