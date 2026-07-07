document.addEventListener("DOMContentLoaded", function () {



/* =========================
   MOBILE MENU
========================= */


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if(menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if(navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        } else {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

}




/* Close mobile menu after clicking link */


document.querySelectorAll(".nav-links a").forEach(link => {


    link.addEventListener("click", () => {


        navLinks.classList.remove("active");


        const icon = menuToggle.querySelector("i");


        if(icon) {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }


    });


});







/* =========================
   STICKY NAVBAR
========================= */


const header = document.querySelector(".header");


window.addEventListener("scroll", () => {


    if(window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }


});







/* =========================
   ACTIVE NAV HIGHLIGHT
========================= */


const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");



window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;


        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight) {


            current = section.getAttribute("id");


        }


    });



    navItems.forEach(link => {


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }


    });


});







/* =========================
   SMOOTH SCROLL
========================= */


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function(e) {


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target) {

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});







/* =========================
   SCROLL REVEAL
========================= */


const revealElements = document.querySelectorAll(".reveal");



const revealObserver = new IntersectionObserver(

    entries => {


        entries.forEach(entry => {


            if(entry.isIntersecting) {


                entry.target.classList.add("active");


            }


        });


    },

    {

        threshold:0.15

    }

);




revealElements.forEach(element => {


    revealObserver.observe(element);


});







/* =========================
   NUMBER COUNTERS
========================= */


const counters = document.querySelectorAll(".counter");

let counterStarted = false;



function startCounters() {


    if(counterStarted) return;


    const statsSection = document.querySelector(".stats");


    if(!statsSection) return;



    const sectionPosition =
    statsSection.getBoundingClientRect().top;



    const screenHeight =
    window.innerHeight;



    if(sectionPosition < screenHeight - 100) {


        counterStarted = true;



        counters.forEach(counter => {


            const target =
            Number(counter.dataset.target);


            let count = 0;


            const speed = target / 100;



            const updateCounter = () => {


                if(count < target) {


                    count += speed;


                    counter.innerText =
                    Math.ceil(count);


                    requestAnimationFrame(updateCounter);


                } else {


                    counter.innerText = target;


                }


            };


            updateCounter();



        });


    }


}




window.addEventListener(
    "scroll",
    startCounters
);


startCounters();
  





});
document.addEventListener("DOMContentLoaded", function () {



/* =========================
   CONTACT FORM VALIDATION
========================= */


const contactForm = document.querySelector(".contact-form");


if(contactForm) {


    contactForm.addEventListener("submit", function(e) {


        e.preventDefault();


        const inputs =
        contactForm.querySelectorAll(
            "input, textarea"
        );


        let valid = true;



        inputs.forEach(input => {


            if(input.value.trim() === "") {


                valid = false;


                input.style.border =
                "2px solid #ff4d4d";


            } else {


                input.style.border =
                "1px solid #ddd";


            }


        });



        if(valid) {


            const button =
            contactForm.querySelector("button");


            button.innerHTML =
            "Message Sent ✓";


            button.style.background =
            "#16a34a";



            contactForm.reset();



            setTimeout(() => {


                button.innerHTML =
                "Send Message";


                button.style.background =
                "";


            },3000);



        }



    });


}







/* =========================
   EMAIL VALIDATION
========================= */


const emailInput =
document.querySelector(
    'input[type="email"]'
);



if(emailInput) {


    emailInput.addEventListener(
        "input",
        function(){

            const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if(
                this.value !== "" &&
                !emailPattern.test(this.value)
            ){


                this.style.border =
                "2px solid #ff4d4d";


            } else {


                this.style.border =
                "1px solid #ddd";


            }


        }
    );


}







/* =========================
   BACK TO TOP BUTTON
========================= */


const backTop =
document.querySelector(".back-top");



window.addEventListener("scroll", () => {


    if(window.scrollY > 500) {


        backTop.classList.add("show");


    } else {


        backTop.classList.remove("show");


    }


});




if(backTop) {


    backTop.addEventListener(
        "click",
        () => {


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });


        }
    );


}







/* =========================
   IMAGE LOAD ANIMATION
========================= */


const images =
document.querySelectorAll("img");



images.forEach(image => {


    image.addEventListener(
        "load",
        () => {


            image.classList.add(
                "loaded"
            );


        }
    );


});







/* =========================
   BUTTON RIPPLE EFFECT
========================= */


const buttons =
document.querySelectorAll(".btn");



buttons.forEach(button => {


    button.addEventListener(
        "click",
        function(e){


            const ripple =
            document.createElement("span");


            ripple.classList.add(
                "ripple"
            );


            const rect =
            this.getBoundingClientRect();



            ripple.style.left =
            `${e.clientX - rect.left}px`;


            ripple.style.top =
            `${e.clientY - rect.top}px`;



            this.appendChild(ripple);



            setTimeout(() => {


                ripple.remove();


            },600);



        }
    );


});







/* =========================
   LAZY IMAGE LOADING
========================= */


images.forEach(image => {


    image.setAttribute(
        "loading",
        "lazy"
    );


});







});
