function checkNavbarScroll() {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > 10) $('.navbar').addClass('active');
    else $('.navbar').removeClass("active");
}

$(window).ready(function() {
    checkNavbarScroll();

    $(this).scroll(function () {
        checkNavbarScroll();
    });
});