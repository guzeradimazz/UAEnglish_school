jQuery(document).ready(function(){

	$('.phonemask').inputmask('999 999 99 99');

  //$('#step2Modal').modal('show');
	//при нажатии на кнопку с id="save"
  $('.modal .submit, .form .submit').click(function() {
      //переменная formValid
      var formValid = true;
      //перебрать все элементы управления input
      $(this).parents('.form').find('.form-control').each(function() {
          //найти предков, которые имеют класс .form-group, для установления success/error
          var formGroup = $(this).parents('.form-group');
          //для валидации данных используем HTML5 функцию checkValidity
          if (this.checkValidity()) {
              //добавить к formGroup класс .has-success, удалить has-error
              formGroup.addClass('has-success').removeClass('has-error');
              //добавить к glyphicon класс glyphicon-ok, удалить glyphicon-remove
          } else {
              //добавить к formGroup класс .has-error, удалить .has-success
              formGroup.addClass('has-error').removeClass('has-success');
              //отметить форму как невалидную
              formValid = false;
          }
      });
      if (formValid) {
          //скрыть модальное окно
          $('.modal').modal('hide');
      }
    });

  $('#selectModal .btn').on('click', function(){
    $('.modal').modal('hide');
    var el = $(this);
    setTimeout(function(){
      if (el.hasClass('step1')){
        $('#step1Modal').modal('show');
      }
      if (el.hasClass('step2')){
        $('#step2Modal').modal('show');
      }
    }, 300)
  })


  $('body').on('click', '.menu li a', function(e){
    $('.menu li').removeClass('active');
    $(this).parents('li').addClass('active');
    e.preventDefault();
    $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: $($(this).attr('href')).offset().top - 80}, 300 );
  })

  $('.header .container').append('<div class="menu-btn"><span></span><span></span><span></span></div>');
  
  $('body').on('click', '.menu-btn', function(){
    $(this).toggleClass('btnActive');
    if ($(this).hasClass('btnActive')){
      $('.header-menu-wrapper').addClass('menuActive')
      $('body').addClass('mobileOpen');
      $('.mobileOpen .header .container').append('<div class="site-overlay">');
    }else{
      $('.header-menu-wrapper').removeClass('menuActive')
      $('body').removeClass('mobileOpen');
      $('.site-overlay').remove();
    }
  })

  $('body').on('click touchstart', '.site-overlay', function(){
    $('.header-menu-wrapper').removeClass('menuActive')
    $('.site-overlay').remove();
    $('body').removeClass('mobileOpen');
    $('.menu-btn').removeClass('btnActive');
  })

  function adaptive(){
    if ($(window).width()<767){
      $('.header .right > .btn-cabinet').appendTo($('.header-menu-wrapper'));
    }else{
      $('.header-menu-wrapper .btn-cabinet').appendTo($('.header .right'));
    }
  }
  adaptive();

  $(window).resize(function(){
    adaptive();    
  })

  $(window).scroll(function(){
    if ($(document).scrollTop() > parseInt($('.page').css('padding-top'))){
      $('body').addClass('headerFixed');
    }else{
      $('body').removeClass('headerFixed');
    }
  })

  /*$('body').on('mouseover touchend', '.tarif-block .owl-carousel .item', function(){
    $(this).addClass('hover');
    $('.tarif-block .owl-carousel').addClass('hovered');
  })
  $('body').on('mouseout', '.tarif-block .owl-carousel .item', function(){
    $(this).removeClass('hover');
    $('.tarif-block .owl-carousel').removeClass('hovered');
  })*/

  $('.raty').each(function(){
      var score = $(this).attr('data-score'),
        readonly = $(this).attr('data-readonly')
        $(this).append("<span class='score'>"+score+"</span>");
      $(this).raty({
            numberMax: 100,
            score:score,
            /*starHalf    : 'img/star-half.png',*/
            starOff     : 'img/star-off.svg',
            starOn      : 'img/star-on.svg',
            readOnly:readonly
        })    
    })  
      
})

$(function() {

  chartFirst = true;

  jQuery('.chart').appear();

  jQuery('.chart').each(function(e){
    if (jQuery(this).is(':appeared')){
      chartInit();
    }
  })

  function chartInit(){
     if (chartFirst){

        let i = 0;

        setInterval(function(){
          if (i > $('.chart').length-1){
            return false;
          }

          $('.chart').eq(i).easyPieChart({
            barColor:'#DFB489',
            lineWidth:7,
            trackColor:'#0d645b',
            size:'150',
            lineCap:'circle',
            onStart:function(){
              $('.timer').eq(i).countTo();
            },
            onStop:function(){
              i++
            }
          });
        })
      }
      chartFirst = false;      
  }

  jQuery(document.body).on('appear', '.chart', function(e, jQueryaffected) {
    chartInit();
  });

  
  $('.tarif-block .owl-carousel').each(function(){
      var el = $(this);
      $(this).owlCarousel({
          loop:true,
          nav:true,
          dots:false,
          items:1,
          smartSpeed:800,
          autoplay:true,
          autoplayTimeout:6000,
          autoplayHoverPause:true,
          responsive:{
              1100:{
                  items:4
              },
              870:{
                  items:3
              },
              560:{
                  items:2
              },
              220:{
                  items:1
              }
          },
          onTranslated:function(){

          },
          onInitialized:function(event){
              
          },
          onTranslate:function(event){
            $('.tarif-block .owl-carousel').removeClass('hovered');
            $('.tarif-block .owl-carousel .item').removeClass('hover');
          }
      });
    })

    $('.teacher-block .owl-carousel').each(function(){
      var el = $(this);
      $(this).owlCarousel({
          loop:true,
          nav:true,
          dots:true,
          items:1,
          margin:30,
          smartSpeed:800,
          autoplay:true,
          autoplayTimeout:70000,
          autoplayHoverPause:true,
          responsive:{
              991:{
                  items:3
              },
              767:{
                  items:2
              },
              220:{
                  items:1
              }
          },
          onTranslated:function(){
            dataImg();
          },
          onInitialized:function(event){
              
          },
          onTranslate:function(event){
            dataImg();
          }
      });
    })

    $('.main-opinion .owl-carousel').each(function(){
      var el = $(this);
      $(this).owlCarousel({
          loop:true,
          nav:true,
          dots:true,
          items:1,
          margin:30,
          smartSpeed:800,
          autoplay:true,
          autoplayTimeout:6500,
          autoplayHoverPause:true,
          responsive:{
              991:{
                  items:2
              },
              767:{
                  items:2
              },
              220:{
                  items:1
              }
          },
          onTranslated:function(){
            dataImg();
          },
          onInitialized:function(event){
              
          },
          onTranslate:function(event){
            dataImg();
          }
      });
    })
    $('.main-photos .owl-carousel').each(function(){
    	
      var el = $(this);
  		var margin = 20;
  		if ($(window).width() > 991){
  			margin = 30;
  		}
  		if ($(window).width() > 1280){
  			margin = 40;
  		}
  		if ($(window).width() > 1600){
  			margin = 60;
  		}
      $(this).owlCarousel({
          loop:true,
          nav:true,
          dots:false,
          items:1,
          margin:margin,
          smartSpeed:800,
          autoplay:true,
          autoplayTimeout:6200,
          autoplayHoverPause:true,
          responsive:{
              767:{
                  items:2
              },
              220:{
                  items:1
              }
          },
          onTranslated:function(){
            dataImg();
          },
          onInitialized:function(event){
              
          },
          onTranslate:function(event){
            dataImg();
          }
      });
    })


    jQuery('.data-img').appear();
    dataImg();

    function dataImg(){
      jQuery('.data-img').each(function(e){
        if (jQuery(this).is(':appeared')){
          jQuery(this).css({
            'background-image':'url('+jQuery(this).attr('data-img')+')',
            'opacity':1
          })
        }
      })
    }

    jQuery(document.body).on('appear', '.data-img', function(e, jQueryaffected) {
      jQuery(e.target).css({
        'background-image':'url('+jQuery(e.target).attr('data-img')+')',
        'opacity':1      
      })
    });

});