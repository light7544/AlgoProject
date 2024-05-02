$(document).ready(function () {

    $('a[href^="#"]').on("click", function (event) {
        event.preventDefault();
        var target = $($(this).attr("href"));
        if(target.length){
            $("html,body").animate(
                {
                    scrollTop: target.offset().top - 15,
                },
                1000
            );
        }
    });

    $(document).on("scroll",function(){
        var scrollPos = $(document).scrollTop();
        $(".nav-link").each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if( 
                refElement.position().top <= scrollPos &&
                refElement.position().top + refElement.height() >
                scrollPos
            ) {
                $(".nav-link").removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
         });

    });
});