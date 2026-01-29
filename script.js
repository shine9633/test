// Script to handle smooth scrolling offset, active link highlighting, and theme toggle
document.addEventListener("DOMContentLoaded", function() {
    
    // --- Theme Toggle Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
            themeToggleBtn.classList.remove('btn-outline-light');
            themeToggleBtn.classList.add('btn-outline-warning');
        }
    }

    themeToggleBtn.addEventListener('click', function() {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            
            // Icon change
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
            themeToggleBtn.classList.remove('btn-outline-warning');
            themeToggleBtn.classList.add('btn-outline-light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');

            // Icon change
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
            themeToggleBtn.classList.remove('btn-outline-light');
            themeToggleBtn.classList.add('btn-outline-warning');
        }
    });

    // --- Navbar Scroll Logic ---
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
