// Set CSS variables from data attributes for gradient borders
(function() {
  const body = document.body;
  const topColor = body.getAttribute('data-gradient-top');
  const bottomColor = body.getAttribute('data-gradient-bottom');
  if (topColor && bottomColor) {
    document.documentElement.style.setProperty('--gradient-top', topColor);
    document.documentElement.style.setProperty('--gradient-bottom', bottomColor);
  }
})();

