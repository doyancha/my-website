const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 150;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ACTIVE NAV LINK */
const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinksAll.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* NAVBAR SCROLL EFFECT */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.style.background =
      "linear-gradient(90deg, #1a0033, #2A004E)";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
  } else {
    header.style.background =
      "linear-gradient(90deg, #2A004E, #500073)";
    header.style.boxShadow = "none";
  }
});
const aboutImage = document.querySelector(".about-image img");
window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight > aboutImage.offsetTop + 50) {
    aboutImage.classList.add("active");
  }
});
