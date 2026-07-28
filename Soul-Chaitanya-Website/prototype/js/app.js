/*==================================================
Soul Chaitanya Website
Hero Scroll Engine
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const heroWrapper = document.querySelector(".hero-wrapper");
    const hero = document.querySelector(".hero");

    const slides = document.querySelectorAll(".hero-slide");
    const backgrounds = document.querySelectorAll(".hero-bg");

    if (!heroWrapper || !hero || slides.length === 0 || backgrounds.length === 0) {
        console.error("Hero elements not found.");
        return;
    }

    const themes = [
        {
            color: "#6FAF6A", // Green
            class: "theme-green"
        },
        {
            color: "#D4A94F", // Gold
            class: "theme-gold"
        },
        {
            color: "#14B8A6", // Teal
            class: "theme-blue"
        }
    ];

    function updateHero(index) {

        // Slides
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

        // Backgrounds
        backgrounds.forEach((bg, i) => {
            bg.classList.toggle("active", i === index);
        });

        // Accent Color
        document.documentElement.style.setProperty(
            "--hero-accent",
            themes[index].color
        );

        // Theme Class
        hero.classList.remove(
            "theme-green",
            "theme-gold",
            "theme-blue"
        );

        hero.classList.add(themes[index].class);

    }

    function handleScroll() {

        const rect = heroWrapper.getBoundingClientRect();

        const total = heroWrapper.offsetHeight - window.innerHeight;

        let progress = (-rect.top) / total;

        progress = Math.max(0, Math.min(progress, 1));

        let index = 0;

        if (progress < 0.33) {

            index = 0;

        } else if (progress < 0.66) {

            index = 1;

        } else {

            index = 2;

        }

        updateHero(index);

    }

   window.addEventListener("scroll", handleScroll);

window.addEventListener("resize", handleScroll);

window.addEventListener("load", () => {

    setTimeout(() => {
        handleScroll();
    }, 100);

});

/*=========================================
Navbar Text Color Change
=========================================*/

const aboutSection = document.querySelector(".about");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    const aboutTop = aboutSection.getBoundingClientRect().top;

    if (aboutTop <= 100) {

        header.classList.add("light-nav");

    } else {

        header.classList.remove("light-nav");

    }

});

/*=========================================
Smooth Scroll (Lenis)
=========================================*/

const lenis = new Lenis({

    autoRaf:true,

    duration:1.2,

    smoothWheel:true,

    wheelMultiplier:1

});
/*=========================================
Scroll Reveal
=========================================*/

const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.2
});

reveals.forEach(item=>{

    revealObserver.observe(item);

});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

                faq.querySelector("i").className = "fas fa-plus";

            }

        });

        item.classList.toggle("active");

        const icon = item.querySelector("i");

        if(item.classList.contains("active")){

            icon.className = "fas fa-minus";

        }else{

            icon.className = "fas fa-plus";

        }

    });

});

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");

});

// Close when clicking outside
document.addEventListener("click", (e) => {

    if (
        !navMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("menu-open");

    }

});

// Close when clicking a menu link
document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("menu-open");

    });

});
// TEMP DEBUG
document.querySelectorAll("*").forEach(el => {

    const rect = el.getBoundingClientRect();

    if (rect.right > window.innerWidth || rect.left < 0) {

        console.log(el, rect);

    }

});
});
