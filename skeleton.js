document.addEventListener('DOMContentLoaded', function() {
  //simulate loading delay
  setTimeout(function() {
      //remove skeleton classes when the time's over
      const skeletons = document.querySelectorAll('.skeleton');
      skeletons.forEach(skeleton => {
          skeleton.classList.remove('skeleton');
          
          //restore original text color
          if(skeleton.classList.contains('text-white')) {
              skeleton.style.color = '#fff';
          }
          if(skeleton.classList.contains('text-white-50')) {
              skeleton.style.color = 'rgba(255, 255, 255, 0.5)';
          }
      });

      //loading images
      const lazyImages = document.querySelectorAll('img');
      lazyImages.forEach(img => {
          if(img.dataset.src) {
              img.src = img.dataset.src;
              img.style.opacity = '1';
              img.style.height = 'auto';
          }
      });
  }, 2000); //simulated 2 second loading time
});
