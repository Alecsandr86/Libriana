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
    })

    // var $elem = $('.js-levels');

    $('.js-levels')
      .fadeOut(0)
      .waypoint(function(dir) {
        if (dir === 'down') {
          $(this.element).fadeIn()
        }
        else {
          $(this.element).fadeOut()
        }
      }, {
        offset: 200
      });

      $('.js-vote').fancybox({
        helpers : {
            media: true
        },
        width: "100%",
        padding: 0,
        margin: 0,
        autoSize: false,
        scrolling: false,
        //autoSize : true,
        scrolling : 'auto',
        fitToView : false,
        maxWidth : '100%',

    	});


      $('.js-vote').bind("click", function () {
        $("body").toggleClass("overflow");
      });
      $(".js-btn").bind("click", function () {
          $("body").removeClass("overflow");
      });







      $(window).bind("load resize", function () {
        var $width = $(this).width();

        if($width >= 767){
          console.log("ok");

          $(".js-vote-two").bind("click", function () {
            $(this).parents(".vote").find(".vote-head").animate({
              "height":"0"
            },500).parents(".vote").find(".vote-footer").animate({
              "height":"0"
            },500);
            $("#vote-two").fadeIn();
          });
          $(".vote-two-btn").bind("click", function () {
            $(this).parents(".vote").find(".vote-head").animate({
              "height":"15vh"
            },500).parents(".vote").find(".vote-footer").animate({
              "height":"20vh"
            },500);
            $("#vote-two").fadeOut();
          });


        }else{
          console.log("li");

          $(".js-vote-two").bind("click", function () {
            $(this).parents(".vote").find(".vote-head").animate({
              "height":"0"
            },500).parents(".vote").find(".vote-footer").animate({
              "height":"0"
            },500);
            $("#vote-two").fadeIn();
          });
          $(".vote-two-btn").bind("click", function () {
            $(this).parents(".vote").find(".vote-head").animate({
              "height":"9vh"
            },500).parents(".vote").find(".vote-footer").animate({
              "height":"25vh"
            },500);
            $("#vote-two").fadeOut();
          });
        }
      })

});
