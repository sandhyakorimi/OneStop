// Function to load the common sidebar
let mymenu = document.getElementById("mymenu");
mymenu.addEventListener("click",function(e){
    e.preventDefault();

function loadSidebar() {
    fetch('sidebar.html') // Fetch sidebar content
        .then(response => response.text())
        .then(data => {
            document.getElementById('common-sidebar').innerHTML = data;
        })
        .then(() => {
            // Ensure the sidebar functions work after loading
            document.getElementById('menu-btn').onclick = toggleSidebar;
            document.getElementById('close-btn').onclick = toggleSidebar;
        });
}

// Function to toggle sidebar visibility
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Load the sidebar when the page loads
window.onload=loadSidebar;
});

document.addEventListener("DOMContentLoaded", function () {
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        // Hide "Sign Up" and show "Log Out"
        document.querySelector(".sign-up").style.display = "none";
        document.querySelector(".log-out").style.display = "block";
    }
});

// Logout function to clear login state
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "./page1.html"; // Redirect back to login page
}

