(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);

var hThumbnail = document.getElementsByClassName('h-thumbnail');
var hAuthor = document.getElementsByClassName('h-author');
var hTeacher = document.getElementsByClassName('h-teacher');
var hBlog = document.getElementsByClassName('h-blog');
var h100 = document.getElementsByClassName('h-100');
var h200 = document.getElementsByClassName('h-200');
var h300 = document.getElementsByClassName('h-300');
var h400 = document.getElementsByClassName('h-400');
var h150 = document.getElementsByClassName('h-150');
var h250 = document.getElementsByClassName('h-250');
var h350 = document.getElementsByClassName('h-350');
var h450 = document.getElementsByClassName('h-450');

for (let i = 0; i < hThumbnail.length; i++) {
    hThumbnail[i].style.height = "60px";
    hThumbnail[i].style.width = "60px";
}

for (let i = 0; i < hAuthor.length; i++) {
    hAuthor[i].style.height = "100px";
    hAuthor[i].style.width = "100px";
}

for (let i = 0; i < hBlog.length; i++) {
    hBlog[i].style.height = "80px";
    hBlog[i].style.width = "120px";
    hBlog[i].style.objectFit = "cover";
    hBlog[i].style.objectPosition = "center";
}

for (let i = 0; i < h100.length; i++) {
    h100[i].style.height = "100px";
    h100[i].style.width = "100%";
}

for (let i = 0; i < h200.length; i++) {
    h200[i].style.height = "200px";
    h200[i].style.width = "100%";
}

for (let i = 0; i < h300.length; i++) {
    h300[i].style.height = "300px";
    h300[i].style.width = "100%";
}

for (let i = 0; i < h400.length; i++) {
    h400[i].style.height = "400px";
    h400[i].style.width = "100%";
}

for (let i = 0; i < h150.length; i++) {
    h150[i].style.height = "150px";
    h150[i].style.width = "100%";
}

for (let i = 0; i < h250.length; i++) {
    h250[i].style.height = "250px";
    h250[i].style.width = "100%";
}

for (let i = 0; i < hTeacher.length; i++) {
    hTeacher[i].style.height = "250px";
    hTeacher[i].style.width = "250px";
}


for (let i = 0; i < h350.length; i++) {
    h350[i].style.height = "350px";
    h350[i].style.width = "100%";
}

for (let i = 0; i < h450.length; i++) {
    h450[i].style.height = "450px";
    h450[i].style.width = "100%";
}

var objFitCenter = document.getElementsByClassName('img-fit-center');
for (let i = 0; i < objFitCenter.length; i++) {
    objFitCenter[i].style.objectFit = "cover";
    objFitCenter[i].style.objectPosition = "center";
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav : true,
    navText : ["<",">"],
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})