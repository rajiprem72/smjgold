document.addEventListener("DOMContentLoaded", function () {
    fetch("navigation1.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navigation-container1").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navigation:", error);
        });
});
