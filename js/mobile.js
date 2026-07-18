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

    const dropdown = e.target.closest(".dropdown");

    if (!dropdown) return;

    e.preventDefault();

    const submenu = dropdown.querySelector(".submenu");

    if (submenu) {

        submenu.classList.toggle("show");

    }

});
