// Smooth scroll for "View my work"
document.querySelectorAll('.cta').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({
      behavior: 'smooth'
    });
  });
});
