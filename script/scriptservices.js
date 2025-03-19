document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service");
    const popupContainer = document.getElementById("popup-container");
    const popupText = document.getElementById("popup-text");
    const backBtn = document.getElementById("back-btn");
    
    const popupContents = {
        "digital-printing": `
            <h1 style="text-align: center;">Digital Printing</h1><br><br>
            <h2>Paper Stocks</h2><br>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; text-align: center;">
                <div>
                    <img style="user-select: none;" draggable="false" src="../images/services/glossy.avif" alt="Glossy">
                    <p> GLOSSY <br> Perfect for vibrant, high-resolution images,
                    our glossy paper enhances colors and details, making it ideal
                    for photographs, brochures, and high-quality prints.</p>
                </div>
                <div>
                    <img style="user-select: none;" draggable="false" src="../images/services/matte.avif" alt="Matte">
                    <p>MATTE <br> With a smooth, non-reflective finish,
                    matte paper is perfect for text-heavy documents,
                    professional presentations, and posters where readability is key.</p>
                </div>
                <div>
                    <img style="user-select: none;" draggable="false" src="../images/services/textured.webp" alt="Textured">
                    <p>TEXTURED <br> Adding a unique tactile experience to your prints,
                    textured paper is great for invitations, special announcements,
                    and artistic projects.</p>
                </div>
            </div>
            <h3 style="margin-top: 30px; text-align: center;">INKS STOCK</h3>
            <div style="display: grid;  grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: center;">
                <div>
                    <img style="user-select: none;" draggable="false" src="../images/services/hewlett.jpg" alt="Hewlett Packard">
                    <p>HEWLETT PACKARD <br> Known for its high-quality output and reliability,
                    HP inks ensure crisp and clear prints every time.</p>
                </div>
                <div>
                    <img style="user-select: none;" draggable="false" src="../images/services/epson.jpg" alt="Epson">
                    <p>EPSON <br> Renowned for vibrant colors and long-lasting prints,
                    Epson inks provide exceptional quality for photos and graphics.</p>
                </div>
                <div>
                    <img style="user-select: none;" draggable="false" src="../images/services/canon.jpg" alt="Canon">
                    <p>CANON <br> Canon inks deliver sharp text and rich, detailed images,
                    making them perfect for a wide range of printing needs.</p>
                </div>
            </div>
        `,
        "binding": `
            <h1 style="text-align: center;">Binding</h1><br><br>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: center;">
                <div>
                    <img style="user-select: none;" draggable="false" src="../images/services/saddlestitch.jpg" alt="Saddle Stitch">
                    <p>SADDLE STITCH <br> A cost-effective and durable binding option, perfect for booklets, brochures, and catalogs.</p>
                </div>
                <div>
                    <img style="user-select: none;" draggable="false" src="../images/services/heatedspine.jpg" alt="Heated Spine">
                    <p>HEATED SPINE <br> Ideal for creating professional-looking books, reports, and manuals with a polished finish.</p>
                </div>
                <div>
                    <img style="user-select: none;" draggable="false" src="../images/services/wir.webp" alt="Wire Binding">
                    <p>WIRE <br> Perfect for presentations, manuals, and notebooks, allowing the document to lie flat when open.</p>
                </div>
            </div>
        `,
        "laminating": `
            <h1 style="text-align: center;">Laminating</h1><br><br>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; text-align: center;">
                <div>
                    <img style="user-select: none;" draggable="false" src="../images/services/glosslaminate.png" alt="Glossy Laminate">
                    <p>GLOSSY LAMINATE <br> Offers a shiny finish and enhances colors, great for posters and presentations.</p>
                </div>
                <div>
                    <img style="user-select: none;" draggable="false" src="../images/services/mattlaminate.jpg" alt="Matte Laminate">
                    <p>MATTE LAMINATE <br> Provides a smooth, non-reflective finish, excellent for professional materials.</p>
                </div>
            </div>
        `,
        "cutting": `
            <h1 style="text-align: center;">Cutting</h1><br><br>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; text-align: center;">
                <div>
                    <img style="user-select: none;" draggable="false" src="../images/services/pcut.jpg" alt="Precision Cutting">
                    <p>PRECISION CUTTING <br> We provide precision cutting services tailored to various sizes and shapes for your project needs.</p>
                </div>
                <div>
                    <img style="user-select: none;" draggable="false" src="../images/services/customcut.jpg" alt="Custom Cutting">
                    <p>CUSTOM CUTTING <br> We provide custom cutting services tailored to unique shapes <br>and sizes for your specific project needs.</p>
                </div>
            </div>
        `,
    };

    services.forEach(service => {
        service.addEventListener("click", function () {
            const serviceId = service.id;
            const content = popupContents[serviceId];
            popupText.innerHTML = content;
            popupContainer.style.display = "flex";
            setTimeout(() => {
                popupContainer.classList.add("active");
            }, 10);
        });
    });

    backBtn.addEventListener("click", function () {
        popupContainer.classList.remove("active");
        setTimeout(() => {
            popupContainer.style.display = "none";
        }, 300);
    });

    const menuButton = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    function toggleMenu() {
        if (navLinks.classList.contains("active")) {
            navLinks.style.opacity = "0";
            navLinks.style.transform = "translateY(-10px)";
    
            setTimeout(() => {
                navLinks.style.visibility = "hidden";
                navLinks.classList.remove("active");
            }, 300);
        } else {
            navLinks.style.visibility = "visible";
            navLinks.style.opacity = "1";
            navLinks.style.transform = "translateY(0)";
            navLinks.classList.add("active");
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