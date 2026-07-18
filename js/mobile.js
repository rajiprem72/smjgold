// ==========================================
// Shiva Mahajothi Jewellers
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

    document.addEventListener("click", function (e) {

    const link = e.target.closest(".dropdown > a");

    if (!link) return;

    e.preventDefault();

    const submenu = link.nextElementSibling;

    if (submenu) {

        submenu.classList.toggle("show");

    }

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
