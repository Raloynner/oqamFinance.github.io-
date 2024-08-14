// document.addEventListener("scroll", (event) => {
//   if (window.scrollY >= 40) {
//     $(".header").addClass("darkHeader");
//   }
// });

$(function () {
  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
    header: '> .accordion-item > h3'
  });

  $(".burger-js").click(function () {
    $(".mobile-menu").slideToggle();
    $("#burger").toggleClass('open');
    $(".header").toggleClass('active');
  });

  $(window).resize(function () {
    let width = $(document).width();
    if (width > 960) {
      $(".mobile-menu").hide();
      $("#burger").removeClass('open');
      $(".header").removeClass('active');
    }
  });

  // $(window).scroll(function () {
  //   let scroll = $(window).scrollTop();
  //   if(window.location.pathname === "/") {
  //     if (scroll >= 1) {
  //       //clearHeader, not clearheader - caps H
  //       $(".header").addClass("darkHeader");
  //     } else {
  //       $(".header").removeClass("darkHeader");
  //     }
  //   }
  // });

  $(".sliding-link").click(function (e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top + -100}, 'slow');
    $(".mobile-menu").hide();
    $("#burger").removeClass('open');
    $(".header").removeClass('active');
  });

  AOS.init({
    easing: 'ease-out-back',
    duration: 1000
  });
  $(".open-modal").click(function (e) {
    $("#modal").modal({
      fadeDuration: 300
    });
  });
});

