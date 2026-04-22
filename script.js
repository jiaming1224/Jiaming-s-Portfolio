/* ── Boilerplate ── */
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const yearTarget = document.querySelector('#current-year');
const reveals = document.querySelectorAll('.reveal');

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('is-open', !expanded);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menuToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    });
  });
}

/* ── Reveal on scroll ── */
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  reveals.forEach((item) => observer.observe(item));
} else {
  reveals.forEach((item) => item.classList.add('is-visible'));
}

/* ── Scroll progress bar ── */
const progressBar = document.getElementById('progress-bar');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }, { passive: true });
}

/* ── Back-to-top button ── */
const btt = document.createElement('button');
btt.id = 'back-to-top';
btt.setAttribute('aria-label', '返回顶部');
btt.textContent = '↑';
document.body.appendChild(btt);

window.addEventListener('scroll', () => {
  btt.classList.toggle('is-visible', window.scrollY > 400);
}, { passive: true });

btt.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Active nav link on scroll ── */
const sections = Array.from(document.querySelectorAll('section[id], div[id="top"]'));

if ('IntersectionObserver' in window && navLinks.length) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            const isActive = href === '#' + entry.target.id || (href === '#about' && entry.target.id === 'about');
            link.classList.toggle('is-active', isActive);
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
  );

  document.querySelectorAll('section[id]').forEach((s) => navObserver.observe(s));
}

/* ── Animated metric counters ── */
function animateCounter(el) {
  const raw = el.textContent.trim();
  // Extract numeric part (handles "100 万+", "0.01°", "61.7%", etc.)
  const match = raw.match(/[\d.]+/);
  if (!match) return;

  const target = parseFloat(match[0]);
  const prefix = raw.slice(0, raw.indexOf(match[0]));
  const suffix = raw.slice(raw.indexOf(match[0]) + match[0].length);
  const isFloat = match[0].includes('.');
  const decimals = isFloat ? (match[0].split('.')[1] || '').length : 0;
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;
    el.textContent = prefix + current.toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.metric-value').forEach(animateCounter);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.metric-grid').forEach((grid) => counterObserver.observe(grid));
}

/* ── Dog-3x custom seekbar ── */
(function () {
  const video   = document.getElementById('dog-video');
  const seekBar = document.querySelector('.dog-seek');
  const timeEl  = document.querySelector('.dog-time');
  const playBtn = document.querySelector('.dog-playbtn');
  if (!video || !seekBar) return;

  function fmt(s) {
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${ss}`;
  }

  // Keep seekbar in sync during playback
  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;
    seekBar.value = String((video.currentTime / video.duration) * 1000);
    timeEl.textContent = fmt(video.currentTime);
  });

  // Seek on drag
  seekBar.addEventListener('input', () => {
    if (video.duration) {
      video.currentTime = (Number(seekBar.value) / 1000) * video.duration;
    }
  });

  // Play/Pause
  playBtn.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
  });
  video.addEventListener('play',  () => { playBtn.textContent = '⏸'; });
  video.addEventListener('pause', () => { playBtn.textContent = '▶'; });
})();
