// Smooth scroll for "View my work"
document.querySelectorAll('.cta').forEach(btn => {
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
    // ask user before downloading
    const shouldDownload = confirm('Do you want to download my CV?');
    if (shouldDownload) {
      // trigger the download
      window.location.href = downloadBtn.href;
    }
  });
}
