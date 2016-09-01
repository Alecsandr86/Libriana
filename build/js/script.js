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
    })

});
