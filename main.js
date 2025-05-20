document.querySelectorAll('.hero .cta').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const downloadBtn = document.querySelector('.cta-header');
if (downloadBtn) {
  downloadBtn.addEventListener('click', e => {
    e.preventDefault();
    const shouldDownload = confirm('Do you want to download my CV?');
    if (shouldDownload) {
      window.location.href = downloadBtn.href;
    }
  });
}
