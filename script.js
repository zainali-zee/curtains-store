/*========================================
        LOADER
========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});


/*========================================
        SCROLL PROGRESS BAR
========================================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*========================================
        STICKY NAVBAR
========================================*/

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.padding = "14px 8%";

        navbar.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.12)";

    }

    else {

        navbar.style.padding = "20px 8%";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

    }

});


/*========================================
        MOBILE MENU
========================================*/

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/*========================================
        DARK MODE
========================================*/

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon =
        themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    }

    else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});


/* Load Saved Theme */

window.addEventListener("load", () => {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

});


const see_more= document.querySelector(".see-more");
see_more.addEventListener("click", ()=>{
    window.location.href="gallery.html";
})

/*========================================
        SCROLL TO TOP BUTTON
========================================*/

const scrollTopBtn =
    document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    }

    else {

        scrollTopBtn.classList.remove("show");

    }

});


scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/*========================================
        PRODUCT SEARCH
========================================*/

// const searchInput =
// document.querySelector(".search-box input");

// const productCards =
// document.querySelectorAll(".product-card");

// searchInput.addEventListener("keyup", () => {

// const value =
// searchInput.value.toLowerCase();

// productCards.forEach(card => {

// const title =
// card.querySelector("h3")
// .innerText.toLowerCase();

// const description =
// card.querySelector("p")
// .innerText.toLowerCase();

// if(title.includes(value) || description.includes(value)){

// card.style.display="block";

// }
// else{

// card.style.display="none";

// }

// });

// });


/*========================================
        PRODUCT FILTER
========================================*/

const filterButtons =
document.querySelectorAll(".filter-btn");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>
btn.classList.remove("active"));

button.classList.add("active");

const filter=
button.dataset.filter;

productCards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}

else if(card.classList.contains(filter)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

});


/*========================================
        FAQ ACCORDION
========================================*/

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=
item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(faq=>{

if(faq!==item){

faq.classList.remove("active");

}

});

item.classList.toggle("active");

});

});


/*========================================
        COUNTER ANIMATION
========================================*/

const counters =
document.querySelectorAll(".counter");

let counterStarted=false;

function startCounters(){

const trigger=
window.innerHeight;

const section=
document.querySelector(".stats");

const top=
section.getBoundingClientRect().top;

if(top<trigger && !counterStarted){

counterStarted=true;

counters.forEach(counter=>{

const target=
+counter.dataset.target;

let count=0;

const speed=
target/150;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=
Math.floor(count);

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

};

update();

});

}

}

window.addEventListener("scroll",startCounters);

startCounters();
/*========================================
        SCROLL REVEAL ANIMATION
========================================*/

const revealElements = document.querySelectorAll(
".product-card,.category-card,.feature-box,.review-card,.gallery-item,.info-box,.faq-item"
);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element=>{

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            element.classList.add("fade-in");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*========================================
        ACTIVE NAVIGATION LINK
========================================*/

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/*========================================
        NEWSLETTER FORM
========================================*/

// const newsletterForm =
// document.querySelector(".newsletter-form");

// newsletterForm.addEventListener("submit",(e)=>{

//     e.preventDefault();

//     const email =
//     newsletterForm.querySelector("input").value.trim();

//     if(email === ""){

//         alert("Please enter your email.");

//         return;

//     }

//     alert("Thank you for subscribing!");

//     newsletterForm.reset();

// });


/*========================================
        CONTACT FORM
========================================*/

// const contactForm =
// document.querySelector(".contact-form form");

// contactForm.addEventListener("submit",(e)=>{

//     e.preventDefault();

//     const inputs =
//     contactForm.querySelectorAll("input, textarea");

//     let valid = true;

//     inputs.forEach(input=>{

//         if(input.hasAttribute("required") &&
//            input.value.trim()===""){

//             valid = false;

//         }

//     });

//     if(!valid){

//         alert("Please fill in all required fields.");

//         return;

//     }

//     alert("Your message has been sent successfully!");

//     contactForm.reset();

// });


/*========================================
        SMOOTH SCROLL
========================================*/

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*========================================
        CONSOLE MESSAGE
========================================*/

console.log(
"%cRoyal Furniture Website Loaded Successfully!",
"color:#C08B5C;font-size:16px;font-weight:bold;"
);

console.log("JavaScript is working");