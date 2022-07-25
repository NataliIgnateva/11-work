(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });


/* 2. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };

/* 3.  Custom Sticky Menu  */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".header-sticky").removeClass("sticky-bar");
      } else {
        $(".header-sticky").addClass("sticky-bar");
      }
    });

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
          $(".header-sticky").removeClass("sticky");
      } else {
          $(".header-sticky").addClass("sticky");
      }
    });

    /* Modal */

     // Нажатие "Закрыть"
    $('.popup-close').click(function() {
        $(this).parents('.popup-black').fadeOut();
        return false;
    });   

    $('#popup').on('click', function(){
        $('.popup-black').fadeOut();
    });    

    $('.modal-phone').children().on('click',function(e){
        e.stopPropagation();
    });
  
    // Нажатие клавиши Esc
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-black').fadeOut();
        }
    });
     
    // Клик по фону
    $('.popup-black').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();                 
        }
    });

     $('.phone__btn').click(function() {
        $('.popup-black').fadeIn();
        return false;
    });

     
/* Валидация */


$.validator.addMethod("regex", function(value, element, regexp) {
    var regExsp = new RegExp(regexp);
    return regExsp.test(value);
},"Please check your input."
);

/* Отправка форм */

$(document).ready(function() {
    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var regExsp = new RegExp(regexp);
            return this.optional(element) || regExsp.test(value);
        },
        "Please check your input."
    );

 /* Функция валидации и вывода сообщений */

    function valEl(el) {
        el.validate({
            rules: {
                tel: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                tel: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Телефон может содержать символы + - ()'
                },
                name: {
                    required: 'Поле обязательно для заполнения',
                },
                email: {
                    required: 'Поле обязательно для заполнения',
                    email: 'Неверный формат E-mail'
                }
            },

  /* Начинаем проверку id="" формы */

            submitHandler: function(form) {
                $('#preloader-active').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    case 'modalform':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $form.trigger('reset');
                                    $('#preloader-active').fadeIn();
                                 }, 1100);
                                setTimeout(function() {
                                  $('#preloader-active').fadeOut();
                                  $('.popup-black').fadeOut();   
                                  $('.message-black').fadeIn();

                                 }, 1300);
                                    $('.message-black').on('click', function(e) {
                                     $(this).fadeOut();
                                    });
       
                                });

                        break;
                         /* Если у формы id="contactsform" - делаем:*/
                        case 'contactsform':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $form.trigger('reset');
                                    $('#preloader-active').fadeIn();
                                 }, 1100);
                                setTimeout(function() {
                                  $('#preloader-active').fadeOut();
                                  $('.contacts__result').fadeIn();
                                }, 1300);
                                    $('.contacts__result').on('click', function(e) {
                                     $(this).fadeOut();
                                    });
                                });
                        break;
                }
                return false;
            }
        });
    }
    

    /* Запускаем механизм валидации форм, если у них есть класс .js-form*/
    $('.js-form').each(function() {
        valEl($(this));
    });
    
}); 

 /* Плавный якорь*/

    $('a[href^="#"]').click(function(){ 
    let anchor = $(this).attr('href'); 
    $('html, body').animate({           
    scrollTop:  $(anchor).offset().top  
    }, 1100);                            
});

/* PARALLAX */

       const scene = $('#scene').get(0);
    // const scene = document.getElementById('scene');
       const parallaxInstance = new Parallax(scene);

      


       
})(jQuery);



 
