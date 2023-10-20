document.addEventListener('DOMContentLoaded', () => {
    // Add your JavaScript for animations and interactions here
  
    // Animate elements when they come into view
    const elementsToAnimate = document.querySelectorAll('.animate__animated');
    elementsToAnimate.forEach(element => {
      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            element.classList.add('animate__fadeIn');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      observer.observe(element);
    });
  });
  