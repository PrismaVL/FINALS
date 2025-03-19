document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    function toggleMenu() {
        if (navLinks.classList.contains("active")) {
            navLinks.style.opacity = "0";
            navLinks.style.transform = "translateY(-10px)";
            
            setTimeout(() => {
                navLinks.classList.remove("active");
                navLinks.style.visibility = "hidden";
            }, 300);
        } else {
            navLinks.style.visibility = "visible";
            navLinks.classList.add("active");
            navLinks.style.opacity = "1";
            navLinks.style.transform = "translateY(0)";
        }
    }

    menuButton.addEventListener("click", toggleMenu);

    window.addEventListener("resize", function () {
        if (window.innerWidth > 900) {
            navLinks.classList.remove("active");
            navLinks.style.visibility = "visible";
            navLinks.style.opacity = "1";
            navLinks.style.transform = "translateY(0)";
        } else {
            navLinks.style.visibility = "hidden";
            navLinks.style.opacity = "0";
            navLinks.style.transform = "translateY(-10px)";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loaderContainer = document.getElementById('loader-container');
    const mainContent = document.getElementById('main-content');

    const slowLoadTimeout = setTimeout(() => {
        loaderContainer.style.display = 'block';
        mainContent.style.display = 'none';
    }, 1000);

    window.addEventListener('load', function () {
        clearTimeout(slowLoadTimeout);
        loaderContainer.style.display = 'none';
        mainContent.style.display = 'block';
    });
});