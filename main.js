const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('.hero .cta').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const options = prefersReducedMotion ? {} : { behavior: 'smooth' };
    document.querySelector('#projects').scrollIntoView(options);
  });
});

const downloadBtn = document.querySelector('.cta-header');
if (downloadBtn) {
  downloadBtn.addEventListener('click', e => {
    e.preventDefault();
    if (prefersReducedMotion) {
      window.location.href = downloadBtn.href;
      return;
    }
    const shouldDownload = confirm('Do you want to download my CV?');
    if (shouldDownload) {
      window.location.href = downloadBtn.href;
    }
  });
}

/* ================================
   Dynamic Header
   ================================ */

const header = document.querySelector('.header');
const isMobile = () => window.innerWidth <= 600;

if (header && !prefersReducedMotion) {
  // Scroll shrink behavior (disabled on mobile)
  let ticking = false;
  const scrollThreshold = 50;

  const updateHeader = () => {
    // Don't shrink on mobile screens
    if (isMobile()) {
      header.classList.remove('shrunk');
      ticking = false;
      return;
    }
    
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > scrollThreshold) {
      header.classList.add('shrunk');
    } else {
      header.classList.remove('shrunk');
    }
    
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  // Also check on resize
  window.addEventListener('resize', () => {
    if (isMobile()) {
      header.classList.remove('shrunk');
    }
  }, { passive: true });
}
