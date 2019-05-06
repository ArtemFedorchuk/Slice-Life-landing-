// let btnLeft = document.querySelector('.slider__left');
// let btnRight = document.querySelector('.slider__right');
// let polosa = document.querySelector('.polosa');

// btnLeft.addEventListener('click', function(){
// 	console.log("hello my friend")
// 	// polosa.style.left =  -300 + 'px';
// })

// Slick Slaider

// $('.big-slide').slick({
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   dots: true,
//   prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
//   nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
//   autoplay: true
// });
$(function (){

$('.big-slide').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        dots: true,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

});