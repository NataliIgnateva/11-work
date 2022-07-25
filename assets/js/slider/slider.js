// const slides = document.querySelectorAll('.slide'),
//       dots = document.querySelectorAll('.dot'),
//       slidesWrap = document.querySelectorAll('.slider-wrapper');

// let index = 0;

// const activeSlide = n => {
//     for(slide of slides){
//         slide.classList.remove('active');
//     }
//     slides[n].classList.add('active');
// }

// const activeDot = n => {
//     for(dot of dots) {
//         dot.classList.remove('active');
//     }
//     dots[n].classList.add('active');
// }

// const prepareCurrentSlide = ind => {
//     activeSlide(ind);
//     activeDot(ind);
// }

// dots.forEach((item,indexDot) => {
//     item.addEventListener('click', () => {
//         index = indexDot;
//         prepareCurrentSlide(index);
//         clearInterval(interval);
//     })
// });

// const nextSlide = () => {
//     if(index == slides.length - 1){
//         index = 0;
//         prepareCurrentSlide(index);
//     }else{
//         index++;
//         prepareCurrentSlide(index);
//     }
// };

// const interval = setInterval(nextSlide, 2500);

 
 $(document).ready(function(){
    $("#new__product").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(".single-item").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
});

$(".slide-one").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
});

