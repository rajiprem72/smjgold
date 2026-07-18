// ==========================================
// Shiva Mahajothi Jewellers
// mobile.js
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".menu-toggle");

    const menuWrapper = document.getElementById("menuWrapper");

    // Open / Close hamburger menu

    button.addEventListener("click", function (e) {

        e.stopPropagation();

        menuWrapper.classList.toggle("open");

    });

    // Handle clicks inside the mobile menu

    menuWrapper.addEventListener("click", function (e) {

        const link = e.target.closest(".dropdown > a");

        if (!link) return;

        e.preventDefault();

        const submenu = link.nextElementSibling;

        if (submenu) {

            submenu.classList.toggle("show");

        }

    });

});
