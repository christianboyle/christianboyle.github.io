// Lightbox functionality for images
document.addEventListener('DOMContentLoaded', function() {
  const lightboxImages = document.querySelectorAll('.lightbox-image');
  const lightbox = document.getElementById('lightbox');
  
  if (lightboxImages.length > 0 && lightbox) {
    const lightboxImg = lightbox.querySelector('img');
    
    // Add click handlers to all lightbox images
    lightboxImages.forEach(function(lightboxImage) {
      lightboxImage.addEventListener('click', function(e) {
        e.stopPropagation();
        // Update lightbox image src and alt from clicked image
        if (lightboxImg) {
          lightboxImg.src = this.src;
          lightboxImg.alt = this.alt;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
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

