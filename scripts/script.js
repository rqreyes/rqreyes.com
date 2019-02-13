$(document).ready(function () {
    // background color-change
    var bg1 = "#fdb812",
        bg2 = "#005ba4",
        bg3 = "#0093c5",
        bg4 = "#00261c";

        $(window).on("scroll touchmove", function () {
        var scrollBottom = $(window).scrollTop() + $(window).height();

        if (scrollBottom >= $("#bg1").offset().top) {
            $('body').css('background', bg1);
        };
        if (scrollBottom > $("#bg2").offset().top) {
            $('body').css('background', bg2)
        };
        if (scrollBottom > $("#bg3").offset().top) {
            $('body').css('background', bg3)
        };
        if (scrollBottom > $("#bg4").offset().top) {
            $('body').css('background', bg4)
        };
    });

    // headroom
    var myElement = document.querySelector("nav");
    var headroom = new Headroom(myElement);
    headroom.init();
});