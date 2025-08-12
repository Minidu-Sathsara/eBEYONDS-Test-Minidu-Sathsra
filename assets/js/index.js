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