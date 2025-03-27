document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading delay
    setTimeout(function() {
        // Remove skeleton classes
        const skeletons = document.querySelectorAll('.skeleton');
        skeletons.forEach(skeleton => {
            skeleton.classList.remove('skeleton');
            
            // Restore original text color
            if(skeleton.classList.contains('text-white')) {
                skeleton.style.color = '#fff';
            }
            if(skeleton.classList.contains('text-white-50')) {
                skeleton.style.color = 'rgba(255, 255, 255, 0.5)';
            }
        });
  
        // Load images after skeleton removal
        const lazyImages = document.querySelectorAll('img');
        lazyImages.forEach(img => {
            if(img.dataset.src) {
                img.src = img.dataset.src;
                img.style.opacity = '1';
                img.style.height = 'auto';
            }
        });
    }, 2000); // Simulated 2 second loading time
  });
