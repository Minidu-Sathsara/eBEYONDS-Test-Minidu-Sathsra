let lastScrollTop = 0;
const navbar = document.querySelector('nav.navbar');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scrolling down - hide navbar
    navbar.style.top = '-80px';  // Adjust height based on your navbar height
    navbar.style.transition = 'top 0.3s';
  } else {
    // Scrolling up - show navbar
    navbar.style.top = '0';
    navbar.style.transition = 'top 0.3s';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
