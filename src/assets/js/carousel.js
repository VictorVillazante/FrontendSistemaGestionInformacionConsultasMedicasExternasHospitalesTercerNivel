

// multipleItemCarousel = document.querySelector("#carouselExampleControls");

// function checkScreenWidth() {
//   if (window.matchMedia("(min-width:1280px)").matches) {
//     opcionesCarousel(4);
//   } else if (window.matchMedia("(min-width:415px) and (max-width:1279px)").matches) {
//     opcionesCarousel(3);
//   } else {
//     if (multipleItemCarousel) {
//       multipleItemCarousel.classList.add('slide');
//     }
//   }
// }

// function opcionesCarousel(numeroElementos) {
//   if (multipleItemCarousel) {
//     let carousel = new bootstrap.Carousel(multipleItemCarousel, {
//       interval: 2000,
//       touch: false,
//     });

//     carouselInner = document.querySelector('.carousel-inner');
//     carouselItems = document.querySelectorAll('.carousel-item');
//     carouselControlNext = document.querySelector('.carousel-control-next');
//     carouselControlPrev = document.querySelector('.carousel-control-prev');
    
//     if (!carouselInner || !carouselItems.length) return;

//     carouselWidth = carouselInner.scrollWidth;
//     cardWidth = carouselItems[0].offsetWidth; 
//     scrollPosition = 0;

//     if (carouselControlNext) {
//       carouselControlNext.addEventListener('click', function () {
//         if (scrollPosition < (carouselWidth - (cardWidth * numeroElementos))) {
//           scrollPosition += cardWidth;
//           carouselInner.scrollTo({ left: scrollPosition, behavior: 'smooth' });
//         }
//       });
//     }

//     if (carouselControlPrev) {
//       carouselControlPrev.addEventListener('click', function () {
//         if (scrollPosition > 0) {
//           scrollPosition -= cardWidth;
//           carouselInner.scrollTo({ left: scrollPosition, behavior: 'smooth' });
//         }
//       });
//     }
//   }
// }

// checkScreenWidth();

// window.addEventListener('resize', checkScreenWidth);



function checkScreenWidth(idScript) {
  let id = idScript.replace(/^script-/, '');
  if (window.matchMedia("(min-width:1280px)").matches) {
    opcionesCarousel(id,4);
  } else if (window.matchMedia("(min-width:415px) and (max-width:1279px)").matches) {
    opcionesCarousel(id,3);
  } else {
    if (document.querySelector(id)) {
      document.querySelector(id).classList.add('slide');
    }
  }
}

function opcionesCarousel(id,numeroElementos) {
  if (document.querySelector(`#${CSS.escape(id)}`)) {
    let carousel = new bootstrap.Carousel(document.querySelector(`#${CSS.escape(id)}`), {
      interval: 2000,
      touch: false,
    });

    
    if (!document.querySelector(`#${CSS.escape(id)} .carousel-inner`) || !document.querySelectorAll(`#${CSS.escape(id)} .carousel-item`).length) return;

    let scrollPosition = 0;

    if (document.querySelector(`#${CSS.escape(id)} .carousel-control-next`)) {
      document.querySelector(`#${CSS.escape(id)} .carousel-control-next`).addEventListener('click', function () {
        if (scrollPosition < (document.querySelector(`#${CSS.escape(id)} .carousel-inner`).scrollWidth - (document.querySelectorAll(`#${CSS.escape(id)} .carousel-item`)[0].offsetWidth * numeroElementos))) {
          scrollPosition += document.querySelectorAll(`#${CSS.escape(id)} .carousel-item`)[0].offsetWidth;
          document.querySelector(`#${CSS.escape(id)} .carousel-inner`).scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
      });
    }

    if (document.querySelector(`#${CSS.escape(id)} .carousel-control-prev`)) {
      document.querySelector(`#${CSS.escape(id)} .carousel-control-prev`).addEventListener('click', function () {
        if (scrollPosition > 0) {
          scrollPosition -= document.querySelectorAll(`#${CSS.escape(id)} .carousel-item`)[0].offsetWidth;
          document.querySelector(`#${CSS.escape(id)} .carousel-inner`).scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
      });
    }
  }
}

checkScreensWidth();

window.addEventListener('resize', checkScreensWidth);


function checkScreensWidth(){
  for (let script of document.querySelectorAll('script')) {
    if(script.id){
      console.log(script.id);
      checkScreenWidth(script.id);
    }
  }
}