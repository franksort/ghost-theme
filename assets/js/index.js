$(document).ready(function() {
  $("#nav-open-btn").click(function(event) {
    event.stopPropagation();
    event.preventDefault();
    $("html").toggleClass("js-nav");
    //$("body").toggleClass("stop-scrolling");
  });
  $(document).click(function() {
    $("html").removeClass("js-nav");
    //$("body").toggleClass("stop-scrolling");
  }); 
  $("#nav").click(function(event) {
    event.stopPropagation(); 
  });
  //$("#nav-open-btn").click();

  var mc = new Hammer($("#nav")[0]);
  mc.on("swipe", function(event) {
    console.log(event.type);
  });

  /*
    if (event.type == 'right') {
      if(!$("html").hasClass("js-nav")) {
        $("html").addClass("js-nav");
      }       
    }
    */

  var offset = 220;
  var duration = 500;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      console.log("should fade in");
      $('#back-to-top').fadeIn(duration);
    } else {
      $('#back-to-top').fadeOut(duration);
    }
  });

  $('#back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
});
