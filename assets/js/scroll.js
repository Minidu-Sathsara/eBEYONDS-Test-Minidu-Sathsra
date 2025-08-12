document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            e.preventDefault();
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            window.scrollTo({
              top: target.offsetTop - navbarHeight,
              behavior: 'smooth'
            });
          }
        });
      });