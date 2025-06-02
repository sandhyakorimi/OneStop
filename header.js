// Load the header into all pages
fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("common-header").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
