/* juani.me — iOS 6 Edition
 * ES5 only. No const/let/arrow/template-literals/fetch/Promise.
 */

(function () {
  var timeEl = document.getElementById('status-time');
  if (!timeEl) return;

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function render() {
    var d = new Date();
    var h = d.getHours() % 12;
    if (h === 0) h = 12;
    timeEl.innerHTML = h + ':' + pad(d.getMinutes());
  }

  render();

  // Tick at the top of every minute, then every 60s.
  var now = new Date();
  var msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
  setTimeout(function () {
    render();
    setInterval(render, 60 * 1000);
  }, msUntilNextMinute);
})();
