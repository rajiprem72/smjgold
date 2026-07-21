
// ==========================================
// Smjgold
// mobile.js
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".menu-toggle");

    const menuWrapper = document.getElementById("menuWrapper");

    // Open / Close Menu

    button.addEventListener("click", function () {

        menuWrapper.classList.toggle("open");

    });

    // Accordion

    const dropdownLinks = document.querySelectorAll(".dropdown > a");

    dropdownLinks.forEach(function(link){

        link.addEventListener("click", function(e){

            e.preventDefault();

            const submenu = this.nextElementSibling;

            submenu.classList.toggle("show");

        });

    });

    // Close menu after clicking normal link

    const menuLinks = document.querySelectorAll(".mobile-menu a");

    menuLinks.forEach(function(link){

        link.addEventListener("click", function(){

            if(this.nextElementSibling &&
               this.nextElementSibling.classList.contains("submenu")){

                return;

            }

            menuWrapper.classList.remove("open");

        });

    });

});

const button = document.querySelector(".contact-button");
const panel = document.querySelector(".contact-panel");

button.addEventListener("click", () => {
    panel.classList.toggle("show");
});
