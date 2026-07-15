document.addEventListener("DOMContentLoaded", function () {
    fetch("navigation.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navigation-container").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navigation:", error);
        });
});
