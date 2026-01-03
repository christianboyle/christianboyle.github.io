// Lightbox functionality for images
document.addEventListener('DOMContentLoaded', function() {
  const lightboxImage = document.querySelector('.lightbox-image');
  const lightbox = document.getElementById('lightbox');
  
  if (lightboxImage && lightbox) {
    // Open lightbox on image click
    lightboxImage.addEventListener('click', function(e) {
      e.stopPropagation();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    // Close lightbox on background click
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Close lightbox on ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});

