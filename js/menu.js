$(document).ready(function () {
  $(".header__menu-collapse").click(function () {
    $(".header__menu-collapse").toggleClass("open-menu");
    $(".header__navigation").toggleClass("open-menu");
    $("body").toggleClass("fixed-page");
  });
});
