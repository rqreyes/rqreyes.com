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

    // smooth scroll
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});