document.addEventListener('DOMContentLoaded', function () {
    const faSolid = document.querySelector('.fa-solid');
    const cardContent = document.querySelector('.card .content');

    faSolid.addEventListener('click', function () {
        if (cardContent.style.visibility === 'visible') {
            cardContent.style.visibility = 'hidden';
        } else {
            cardContent.style.visibility = 'visible';
        }
    });
});

function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
  
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (elementPosition < screenHeight) {
        element.classList.add('fade-in-active');
      } 
    });
  }
  
  fadeInOnScroll();
  
  window.addEventListener('scroll', fadeInOnScroll);
  