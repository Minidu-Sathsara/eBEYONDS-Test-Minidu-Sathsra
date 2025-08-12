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