// ==========================================
// Shiva Mahajothi Jewellers
// mobile.js
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".menu-toggle");

    const menuWrapper = document.getElementById("menuWrapper");

    // Open / Close menu

    button.addEventListener("click", function () {

        menuWrapper.classList.toggle("open");

    });

    // Handle menu clicks

    document.addEventListener("click", function (e) {

        const link = e.target.closest(".mobile-menu a");

        if (!link) return;

        const submenu = link.parentElement.querySelector(".submenu");

        // Gallery clicked

        if (submenu) {

            e.preventDefault();

            submenu.classList.toggle("show");

            return;

        }

        // Normal link clicked

        menuWrapper.classList.remove("open");

    });

});
