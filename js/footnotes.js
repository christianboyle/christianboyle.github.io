// Footnote highlight animation functionality
document.addEventListener('DOMContentLoaded', function() {
  const footnoteLinks = document.querySelectorAll('a.footnote');
  footnoteLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetLink = document.getElementById(targetId);
        if (targetLink) {
          // Remove any existing highlight
          document.querySelectorAll('.footnotes a.highlight').forEach(function(el) {
            el.classList.remove('highlight');
          });
          
          // Trigger reflow to reset animation
          void targetLink.offsetWidth;
          
          // Add highlight class
          targetLink.classList.add('highlight');
          
          // Remove highlight after animation completes
          setTimeout(function() {
            targetLink.classList.remove('highlight');
          }, 600);
        }
      }
    });
  });
});

