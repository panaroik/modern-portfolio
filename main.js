const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__links > li");

const options1 = {
    root: null,
    threshold: 0.15,
    rootMargin: "-150px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            sections.forEach((section, idx) => {
                entry.target === section
                    ? (navLinks[idx].ariaCurrent = "true")
                    : (navLinks[idx].ariaCurrent = "false");
            });
        }
    });
}, options1);

sections.forEach((section) => {
    observer.observe(section);
});

const avatar = document.querySelector(".avatar__container");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    window.scrollY >= 40
        ? avatar.classList.add("hideAvatar")
        : avatar.classList.remove("hideAvatar");
});
