$(function () {
  $(".burger").on("click", function (e) {
    e.preventDefault(),
      $(this).toggleClass("active"),
      $("ul.mob-menu").slideToggle();
  }),
    $("ul.top-menu li a").on("click", function (e) {
      $(this).hasClass("no-scroll") ||
        (e.preventDefault(),
        $("html, body").animate(
          { scrollTop: $($(this).attr("href")).offset().top },
          1e3
        ));
    }),
    $("ul.mob-menu li a").on("click", function (e) {
      $(this).hasClass("no-scroll") ||
        (e.preventDefault(),
        $(".burger").removeClass("active"),
        $("ul.mob-menu").slideUp(),
        $("html, body").animate(
          { scrollTop: $($(this).attr("href")).offset().top - 40 },
          1e3
        ));
    }),
    $(".faq-item .ques").on("click", function (e) {
      e.preventDefault(),
        $(this).parent().hasClass("active")
          ? ($(this).parent().removeClass("active"), $(this).next().slideUp())
          : ($(".faq-item").removeClass("active"),
            $(this).parent().addClass("active"),
            $(".faq-item").find(".answ").slideUp(),
            $(this).next().slideDown());
    }),
    $(".reviews-slider").slick({
      slidesToShow: 2,
      arrows: !1,
      autoplay: !0,
      autoplaySpeed: 5e3,
      speed: 1e3,
      responsive: [
        { breakpoint: 960, settings: { slidesToShow: 1, autoplay: !1 } },
      ],
    }),
    $(".slider-arrow.prev").on("click", function (e) {
      e.preventDefault(), $(".reviews-slider").slick("slickPrev");
    }),
    $(".slider-arrow.next").on("click", function (e) {
      e.preventDefault(), $(".reviews-slider").slick("slickNext");
    }),
    $(".gallery-mob-slider").slick({
      arrows: !1,
      speed: 1e3,
      autoplay: !0,
      autoplaySpeed: 1e4,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 768,
          settings: { slidesToShow: 1, slidesToScroll: 1, autoplaySpeed: 5e3 },
        },
      ],
    }),
    $(".gallery-arrow.prev").on("click", function (e) {
      e.preventDefault(), $(".gallery-mob-slider").slick("slickPrev");
    }),
    $(".gallery-arrow.next").on("click", function (e) {
      e.preventDefault(), $(".gallery-mob-slider").slick("slickNext");
    }),
    $(".close-gallery-modal").on("click", function (e) {
      e.preventDefault(),
        $(".gallery-modal-wrap").fadeOut(),
        $("body").removeClass("hidden");
    }),
    $(".gallery-right-button a").on("click", function (e) {
      e.preventDefault(), $(".overlay, .modal.free-window").fadeIn();
    }),
    $(".header-button a.remove-order-call").on("click", function (e) {
      e.preventDefault(), $(".overlay, .modal.order-call-window").fadeIn();
    }),
    $(".header-button a.vikup-order-call, .gallery-right-button a").on(
      "click",
      function (e) {
        e.preventDefault(), $(".overlay, .modal").fadeIn();
      }
    );
  var e = !0;
  $(document).on("mouseleave", function () {
    e && ($(".overlay, .modal").fadeIn(), (e = !1));
  }),
    $(".overlay, .modal .close").on("click", function (e) {
      e.preventDefault(), $(".overlay, .modal").fadeOut();
    }),
    $(".thanks-overlay, .thanks-modal .close").on("click", function (e) {
      e.preventDefault(), $(".thanks-overlay, .thanks-modal").fadeOut();
    }),
    $(".modal form").on("submit", function (e) {
      return (
        $.ajax({
          type: "POST",
          url: "../mail.php",
          data: $(this).serialize(),
        }).done(function () {
          $(".modal form input").not('[type="hidden"]').val(""),
            $(".overlay, .modal").fadeOut(),
            ym(80260891, "reachGoal", "PHONE_FORM_TOGETHER"),
            ym(80260891, "reachGoal", "SEND-FORM-JS"),
            $(".thanks-overlay, .thanks-modal").fadeIn();
        }),
        !1
      );
    }),
    $(".all-form form").on("submit", function (e) {
      return (
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).serialize(),
        }).done(function () {
          $(".all-form form input").not('[type="hidden"]').val(""),
            ym(80260891, "reachGoal", "PHONE_FORM_TOGETHER"),
            ym(80260891, "reachGoal", "SEND-FORM-JS"),
            $(".thanks-overlay, .thanks-modal").fadeIn();
        }),
        !1
      );
    }),
    $(".hour-left form").on("submit", function (e) {
      return (
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).serialize(),
        }).done(function () {
          $(".hour-left form input").not('[type="hidden"]').val(""),
            ym(80260891, "reachGoal", "PHONE_FORM_TOGETHER"),
            ym(80260891, "reachGoal", "SEND-FORM-JS"),
            $(".thanks-overlay, .thanks-modal").fadeIn();
        }),
        !1
      );
    }),
    $(".why2-right form").on("submit", function (e) {
      return (
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).serialize(),
        }).done(function () {
          $(".why2-right form input").not('[type="hidden"]').val(""),
            ym(80260891, "reachGoal", "PHONE_FORM_TOGETHER"),
            ym(80260891, "reachGoal", "SEND-FORM-JS"),
            $(".thanks-overlay, .thanks-modal").fadeIn();
        }),
        !1
      );
    }),
    $(".why3-right form").on("submit", function (e) {
      return (
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).serialize(),
        }).done(function () {
          $(".why3-right form input").not('[type="hidden"]').val(""),
            ym(80260891, "reachGoal", "PHONE_FORM_TOGETHER"),
            ym(80260891, "reachGoal", "SEND-FORM-JS"),
            $(".thanks-overlay, .thanks-modal").fadeIn();
        }),
        !1
      );
    }),
    $(".faq-right form").on("submit", function (e) {
      return (
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).serialize(),
        }).done(function () {
          $(".faq-right form input").not('[type="hidden"]').val(""),
            ym(80260891, "reachGoal", "PHONE_FORM_TOGETHER"),
            ym(80260891, "reachGoal", "SEND-FORM-JS"),
            $(".thanks-overlay, .thanks-modal").fadeIn();
        }),
        !1
      );
    }),
    $(".consultation-container-right form").on("submit", function (e) {
      return (
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).serialize(),
        }).done(function () {
          $(".consultation-container-right form input")
            .not('[type="hidden"]')
            .val(""),
            ym(80260891, "reachGoal", "PHONE_FORM_TOGETHER"),
            ym(80260891, "reachGoal", "SEND-FORM-JS"),
            $(".thanks-overlay, .thanks-modal").fadeIn();
        }),
        !1
      );
    });
});
