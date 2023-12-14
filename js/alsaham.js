function stickyHeader() {
  const header = document.querySelector('.header')
  const screenPosition = window.scrollY;
  const container = document.querySelector('.container')
  const image = document.querySelector('.blog img')
  const image2 = document.querySelector('.blog .image');
  

  if (screenPosition > 100) {
    header.classList.add('sticky-header')    
  }
  else {
    header.classList.remove('sticky-header')
  }

  if (screenPosition >= 1300 && screenPosition < 1800) {
    container.classList.add('full-container')
  } else {
    container.classList.remove('full-container')
  }

  if (screenPosition > 300 && screenPosition < 700) {
    image.classList.add('move-blog-image');
  } else {
    image.classList.remove('move-blog-image')
  }
  
  if (screenPosition > 700 && screenPosition <= 1300) {
    image2.classList.add('move-blog-image')
  } else {
    image2.classList.remove('move-blog-image')    
  }

}

window.addEventListener('scroll' , stickyHeader)


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
  
window.addEventListener('scroll', fadeInOnScroll);

const cart = [];

const subContainer = document.querySelector('.message-container .sub-container');

console.log(subContainer)

