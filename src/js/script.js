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

      // var elem = $('.js-levels');
      // $(".footer")
      //   .waypoint(function (dirs) {
      //     if(dirs === 'down'){
      //       alert("li");
      //       elem.fadeOut()
      //     }else{
      //       elem.fadeIn()
      //     }
      //   });

});
