const multipleItemCarousel = document.querySelector("#carouselExampleControls");

function checkScreenWidth() {
  if (window.matchMedia("(min-width:1280px)").matches) {
    opcionesCarousel(4);
  } else if (window.matchMedia("(min-width:415px) and (max-width:1279px)").matches) {
    opcionesCarousel(3);
  } else {
    if (multipleItemCarousel) {
      multipleItemCarousel.classList.add('slide');
    }
  }
}

function opcionesCarousel(numeroElementos) {
  if (multipleItemCarousel) {
    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
      interval: 2000,
      touch: false,
    });

    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselControlNext = document.querySelector('.carousel-control-next');
    const carouselControlPrev = document.querySelector('.carousel-control-prev');
    
    if (!carouselInner || !carouselItems.length) return;

    let carouselWidth = carouselInner.scrollWidth;
    let cardWidth = carouselItems[0].offsetWidth; 
    let scrollPosition = 0;

    if (carouselControlNext) {
      carouselControlNext.addEventListener('click', function () {
        if (scrollPosition < (carouselWidth - (cardWidth * numeroElementos))) {
          scrollPosition += cardWidth;
          carouselInner.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
      });
    }

    if (carouselControlPrev) {
      carouselControlPrev.addEventListener('click', function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          carouselInner.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
      });
    }
  }
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);