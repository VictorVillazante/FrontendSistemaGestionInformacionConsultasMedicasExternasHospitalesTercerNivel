carouselMedicosEspecialistas = document.querySelector("#carouselMedicosEspecialistas");

function checkScreenWidth() {
  if (window.matchMedia("(min-width:1280px)").matches) {
    opcionesCarousel(4);
  } else if (window.matchMedia("(min-width:415px) and (max-width:1279px)").matches) {
    opcionesCarousel(3);
  } else {
    if (carouselMedicosEspecialistas) {
      carouselMedicosEspecialistas.classList.add('slide');
    }
  }
}

function opcionesCarousel(numeroElementos) {
  if (carouselMedicosEspecialistas) {
    let carousel = new bootstrap.Carousel(carouselMedicosEspecialistas, {
      interval: 2000,
      touch: false,
    });

    carouselInnerMedicosEspecialistas = document.querySelector('#carousel-inner-medicos-especialistas');
    carouselItemsMedicosEspecialistas = document.querySelectorAll('.carousel-item-medicos-especialistas');
    carouselControlNext = document.querySelector('#carousel-medicos-especialistas-control-prev');
    carouselControlPrev = document.querySelector('#carousel-medicos-especialistas-control-next');
    
    if (!carouselInnerMedicosEspecialistas || !carouselItemsMedicosEspecialistas.length) return;

    carouselWidth = carouselInnerMedicosEspecialistas.scrollWidth;
    cardWidth = carouselItemsMedicosEspecialistas[0].offsetWidth; 
    scrollPosition = 0;

    if (carouselControlNext) {
      carouselControlNext.addEventListener('click', function () {
        if (scrollPosition < (carouselWidth - (cardWidth * numeroElementos))) {
          scrollPosition += cardWidth;
          carouselInnerMedicosEspecialistas.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
      });
    }

    if (carouselControlPrev) {
      carouselControlPrev.addEventListener('click', function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          carouselInnerMedicosEspecialistas.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
      });
    }
  }
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);