$(function () {
  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
    header: '> .accordion-item > h3'
  });

  $(".burger-js").click(function () {
    $(".mobile-menu").addClass('active');
    $("html").css({'overflow': 'hidden'});
  });
  $(".mobile-menu-close").click(function () {
    $(".mobile-menu").removeClass('active');
    $("html").css({'overflow': 'visible'});
  });

  $(window).resize(function () {
    let width = $(document).width();
    if (width > 1200) {
      $(".mobile-menu").removeClass('active');
      $("html").css({'overflow': 'visible'});
    }
  });

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if(window.location.pathname === "/") {
      if (scroll >= 1) {
        //clearHeader, not clearheader - caps H
        $(".header").addClass("darkHeader");
      } else {
        $(".header").removeClass("darkHeader");
      }
    }
  });

  $(".sliding-link").click(function (e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top + -80}, 'slow');
    $(".mobile-menu").removeClass('active');
  });

  AOS.init({
    easing: 'ease-out-back',
    duration: 1000
  });

});

$(document).ready(function () {
  let height = $(document).height();
  if (height >= 1) {
    $(".header").addClass("darkHeader");
  }
});

