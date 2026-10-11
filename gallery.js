/*========================================
        MOBILE MENU
========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

/*========================================
        DARK MODE
========================================*/

const themeBtn=document.getElementById("themeBtn");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

const icon=themeBtn.querySelector("i");

if(document.body.classList.contains("dark")){

icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");

localStorage.setItem("theme","dark");

}
else{

icon.classList.remove("fa-sun");
icon.classList.add("fa-moon");

localStorage.setItem("theme","light");

}

});

}

window.addEventListener("load",()=>{

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

});

/*========================================
        FILTER BUTTONS
========================================*/

const filterButtons=document.querySelectorAll(".gallery-filter-btn");

const galleryItems=document.querySelectorAll(".gallery-box");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

const filter=button.dataset.filter;

galleryItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}

else if(item.classList.contains(filter)){

item.style.display="block";

}

else{

item.style.display="none";

}

});

});

});

/*========================================
        SCROLL TO TOP
========================================*/

const scrollTopBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollTopBtn.classList.add("show");

}
else{

scrollTopBtn.classList.remove("show");

}

});

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
/*========================================
        LIGHTBOX
========================================*/

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeBtn = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector(".prev-image");
const nextBtn = document.querySelector(".next-image");

const images = document.querySelectorAll(".gallery-box img");

let currentIndex = 0;

/*========================================
        OPEN LIGHTBOX
========================================*/

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});

/*========================================
        CLOSE LIGHTBOX
========================================*/

function closeLightbox(){

    lightbox.classList.remove("show");

    document.body.style.overflow = "auto";

}

closeBtn.addEventListener("click", closeLightbox);

/* Click outside image */

lightbox.addEventListener("click", (e)=>{

    if(e.target === lightbox){

        closeLightbox();

    }

});

/*========================================
        NEXT IMAGE
========================================*/

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;

}

nextBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    nextImage();

});

/*========================================
        PREVIOUS IMAGE
========================================*/

function previousImage(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;

}

prevBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    previousImage();

});

/*========================================
        KEYBOARD SUPPORT
========================================*/

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("show")) return;

    if(e.key === "Escape"){

        closeLightbox();

    }

    if(e.key === "ArrowRight"){

        nextImage();

    }

    if(e.key === "ArrowLeft"){

        previousImage();

    }

});
/*========================================
        SCROLL REVEAL ANIMATION
========================================*/

const revealItems = document.querySelectorAll(".gallery-box");

function revealGallery() {

    const triggerBottom = window.innerHeight - 100;

    revealItems.forEach(item => {

        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.6s ease";

});

window.addEventListener("scroll", revealGallery);
window.addEventListener("load", revealGallery);

/*========================================
        STICKY NAVBAR EFFECT
========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.padding = "15px 8%";
        navbar.style.boxShadow = "0 12px 30px rgba(0,0,0,.15)";

    } else {

        navbar.style.padding = "20px 8%";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

    }

});

/*========================================
        FILTER ANIMATION
========================================*/

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        galleryItems.forEach(item => {

            item.style.opacity = "0";

        });

        setTimeout(() => {

            galleryItems.forEach(item => {

                item.style.opacity = "1";

            });

        }, 200);

    });

});

/*========================================
        PRELOAD IMAGES
========================================*/

images.forEach(img => {

    const preload = new Image();
    preload.src = img.src;

});

/*========================================
        CONSOLE MESSAGE
========================================*/

console.log(
    "%cRoyal Furniture Gallery Loaded Successfully!",
    "color:#C08B5C;font-size:16px;font-weight:bold;"
);