// Script to handle smooth scrolling offset and active link highlighting
document.addEventListener("DOMContentLoaded", function() {
    
    // Add active class to navbar items on scroll
    const sections = document.querySelectorAll("section, header");
    const navLi = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.getAttribute("href").includes(current)) {
                li.classList.add("active");
            }
        });
    });
});