 AOS.init({
        duration: 1000,
        once: false,
      });

(function () {
    'use strict';
    const forms = document.querySelectorAll('#contactForm');
    Array.from(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();

   document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".custom-toggler");
    const navbarCollapse = document.getElementById("navbarNav");

    navbarCollapse.addEventListener("show.bs.collapse", function () {
      toggler.classList.add("active");
    });

    navbarCollapse.addEventListener("hide.bs.collapse", function () {
      toggler.classList.remove("active");
    });
  });


document.addEventListener("DOMContentLoaded", () => {
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  let outlineX = 0;
  let outlineY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;

    cursorDot.style.left = `${targetX}px`;
    cursorDot.style.top = `${targetY}px`;
  });

  function animateOutline() {
    outlineX += (targetX - outlineX) * 0.15;
    outlineY += (targetY - outlineY) * 0.15;

    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateOutline);
  }

  animateOutline();
});
