document.addEventListener("DOMContentLoaded", function () {

    fetch("navigation1.html")

        .then(response => response.text())

        .then(data => {

            document.getElementById(
                "navigation-container1"
            ).innerHTML = data;

            // Accordion

            const dropdownLinks = document.querySelectorAll(
                ".dropdown > a"
            );

            dropdownLinks.forEach(function (link) {

                link.addEventListener("click", function (e) {

                    e.preventDefault();

                    const submenu =
                        this.nextElementSibling;

                    submenu.classList.toggle("show");

                });

            });

        })

        .catch(error => {

            console.error(
                "Error loading navigation:",
                error
            );

        });

});
