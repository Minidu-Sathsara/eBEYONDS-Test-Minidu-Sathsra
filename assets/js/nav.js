let lastScrollTop = 0;
const navbar = document.querySelector('nav.navbar');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
   
    navbar.style.top = '-80px';  
    navbar.style.transition = 'top 0.3s';
  } else {
   
    navbar.style.top = '0';
    navbar.style.transition = 'top 0.3s';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});
