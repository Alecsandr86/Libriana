window.log = function(param){
    console.log(param);
};

$(document).ready(function(){

    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    $(".js-btn-nav").on("click", function () {
      $(this).nextAll(".js-header-nav").slideToggle();
    });

    $(".vote-box__link").bind("click", function () {
      $(this).toggleClass("active");
    });


    $(".list-nav__link-up").bind("click", function(){
      var elem = $(this).next(".list-nav-up");
      elem.toggleClass("active");


    });
    $(".list-nav-up__item").bind("click", function(){
      
      $(this).parent(".list-nav-up").removeClass("active");

    });

    $(document).mouseup(function (e){ 
      
        var div = $(".list-nav-up"); 
        if (!div.is(e.target)) { 
          div.removeClass("active"); // скрываем его
        }
    });




    $(".language__link").bind("click", function(){

      var elem = $(this).nextAll(".langu-up");


      elem.toggleClass("active");

    });

    $(".langu-up__item").bind("click", function(){
      console.log("ok");
      $(this).parent(".langu-up").removeClass("active");

    });

    $(document).mouseup(function (e){ 
      
        var div = $(".langu-up"); 
        if (!div.is(e.target)) { 
          div.removeClass("active");
        }
    });


      



    // var $elem = $('.js-levels');

    // $('.js-levels')
    //   .fadeOut(0)
    //   .waypoint(function(dir) {
    //     if (dir === 'down') {
    //       $(this.element).fadeIn()
    //     }
    //     else {
    //       $(this.element).fadeOut()
    //     }
    //   }, {
    //     offset: 200
    //   });



      var $elem = $(".js-levels");

      var elemTop = $elem.offset();
      //alert(elemTop.top);

      $(window).bind("scroll", function () {

        var thisScroll = $(this).scrollTop();
        var numb = 0;

        //alert(elemTop.top);
        //alert($(this).scrollTop());
        //alert($("body").offset().top);
        //var desiredHeight = $(window).height();


        //console.log(elemTop.top);


        if((elemTop.top - numb)  <= thisScroll){
          $elem.addClass("fixed");
        }else{
          $elem.removeClass("fixed");
        }
      })










      $('.js-vote').fancybox({
        helpers : {
            media: true
        },
        width: "100%",
        padding: 0,
        margin: 0,
        closeBtn: false,
        //autoSize: false,
        //scrolling: false,
        //autoSize : true,
        //scrolling : false,
        //fitToView : false,
        maxWidth : '100%',

    	});


      $('.js-vote').bind("click", function () {
        $("body").toggleClass("overflow");
        $(".vote-box__item img").addClass("blur");
      });
      $(".js-btn").bind("click", function () {
          $("body").removeClass("overflow");
      });

      $(".vote-nav").mCustomScrollbar({
          axis:"x",
          advanced:{
            autoExpandHorizontalScroll:true
          }
        });
      // $(".vote-box").mCustomScrollbar({
      //     autoHideScrollbar:true,
      //     //theme:"rounded"
      //   });


      $(window).bind("load resize", function () {
        var $width = $(this).width();

        if($width >= 767){
          //console.log("ok");

          // $(".js-vote-two").bind("click", function () {
          //   $(this).parents(".vote").find(".vote-head").animate({
          //     "height":"0"
          //   },500).parents(".vote").find(".vote-footer").animate({
          //     "height":"0"
          //   },500);
          //   $("#vote-two").fadeOut();
          // });


          // $(".vote-two-btn").bind("click", function () {
          //   $(this).parents(".vote").find(".vote-head").animate({
          //     "height":"70px"
          //   },500).parents(".vote").find(".vote-footer").animate({
          //     "height":"120px"
          //   },500);
          //   $("#vote-two").fadeOut();
          // });

          $(".js-vote-two, .js-btn").bind("click", function () {
            $(this).parents(".vote").find(".vote-head").animate({
              "height":"0"
            },500).parents(".vote").find(".vote-footer").animate({
              "height":"0"
            },500);
            $(".vote-box__item img").addClass("blur");
            $("#vote-two").fadeIn();
          });

          $(".vote-two-btn").bind("click", function () {
              $(this).parents(".vote").find(".vote-head").animate({
                "height":"70px"
              },500).parents(".vote").find(".vote-footer").animate({
                "height":"120px"
              },500);
              $(".vote-two").fadeOut();
              $(".vote-box__item img").removeClass("blur");
          });

        }else{
          //console.log("li");

          $(".js-vote-two, .js-btn").bind("click", function () {
            $(this).parents(".vote").find(".vote-head").animate({
              "height":"0"
            },500).parents(".vote").find(".vote-footer").animate({
              "height":"0"
            },500);
            $(".vote-box__item img").addClass("blur");
            $("#vote-two").fadeIn();
          });


          $(".vote-two-btn").bind("click", function () {
            $(this).parents(".vote").find(".vote-head").animate({
              "height":"50px"
            },500).parents(".vote").find(".vote-footer").animate({
              "height":"200px"
            },500);
            $("#vote-two").fadeOut();
            $(".vote-box__item img").removeClass("blur");
          });
        }
      })

});



$(function() {
    $('.loader-box,.loader').fadeIn(10); //показывает фон и индикатор
    $(window).load(function() {
        $('.loader-box,.loader').fadeOut(1000); //скрывает, после загрузки страницы
    });
});
