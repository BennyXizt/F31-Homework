$(document).ready(function () {
    $(".header__burger").mouseup(function() {
       $(this).toggleClass("active")
       $(".header__list").toggleClass("active")
       $("body").toggleClass("active")
       $("header").toggleClass("active")
    })
})