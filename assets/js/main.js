//  CATALOG SLIDER

let catalogSlider = new Swiper(".catalog-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
    },
    pagination: {
        el: ".catalog__pagination",
    },
});



//  PRODUCTS SLIDER

let productSlider = new Swiper(".product__content", {
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 15,
    slidesPerGroup: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1100: {
            slidesPerView: 3,
            centeredSlides: false,
            slidesPerGroup: 3,
        },
    }
});


// NEWS SLIDER

let newsSlider = new Swiper(".news__slider", {
    spaceBetween: 50,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2,

        },
    }
});


// HEADER FIXED

let header = document.querySelector(".header");
let coords = header.getBoundingClientRect();

console.log(document.documentElement.scrollTop)

window.addEventListener('scroll', function () {
    if (window.pageYOffset > coords.top) {
        header.classList.add("header-fixed")
    } else {
        header.classList.remove("header-fixed")
    }
});


// MOBILE MENU


let menu = document.querySelector(".mobile-nav")
let btnOpen = document.querySelector(".header__bars");
let btnClose = document.querySelector(".mobile-nav__close");
// click open
btnOpen.addEventListener("click", function () {
    menu.classList.toggle("mobile-nav_active");
    document.body.style.overflow = "hidden";
})
// click close
btnClose.addEventListener("click", function () {
    menu.classList.toggle("mobile-nav_active");
    document.body.style.overflow = "";
})




