function stickyHeader() {
  const header = document.querySelector('.header')
  const screenPosition = window.scrollY;
  const container = document.querySelector('.container')
  const image = document.querySelector('.blog img')
  const image2 = document.querySelector('.blog .image');
  

  if (screenPosition > 100) {
    header.classList.add('sticky-header')    
  }else {
    header.classList.remove('sticky-header')
  }

  if (screenPosition >= 2100 && screenPosition < 2700) {
    container.classList.add('full-container')
     } else {
    container.classList.remove('full-container')
  }

  if (screenPosition > 1300 && screenPosition < 1700) {
    image.classList.add('move-blog-image');
  } else {
    image.classList.remove('move-blog-image')
  }
  
  if (screenPosition > 1700 && screenPosition <= 2100) {
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


const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const menuBtn = document.querySelector('.nav__menu');

menuBtn.addEventListener('click', () => {
    const sidebarWidth = sidebar.offsetWidth;
    if (sidebar.style.left === '0px') {
        sidebar.style.left = `-${sidebarWidth}px`;
      content.style.marginLeft = '0';
      menuBtn.innerHTML = '<i class="nav__menu"><i>'
    } else {
        sidebar.style.left = '0';
      content.style.marginLeft = `${sidebarWidth}px`;
      menuBtn.innerHTML = '<i class="ri-close-line"></i>'
  }
});
