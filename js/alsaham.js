function stickyHeader() {
  const screenPosition = window.scrollY;
  const header = document.querySelector('.header');
  const container = document.querySelector('.container');
  const image = document.querySelector('.blog img');
  const image2 = document.querySelector('.blog .image');
  const anime = document.querySelector('.anime');
  const firstParagraph = document.querySelector('.first-paragraph');

  header.classList.toggle('sticky-header', screenPosition > 2);
  container.classList.toggle('full-container', screenPosition >= 2100 && screenPosition < 2700);
 image.classList.toggle('move-blog-image', screenPosition > 1100 && screenPosition <= 1700);
 image2.classList.toggle('move-blog-image', screenPosition > 1700 && screenPosition <= 2100);

  
  if (screenPosition > 250) {
    anime.classList.add('slide-anime');
    firstParagraph.classList.add('slide-first-paragraph');
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
    } else {
        sidebar.style.left = '0';
      content.style.marginLeft = `${sidebarWidth}px`;
  }
});

