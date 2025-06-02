

// // Generate particles every 100ms
// function createConfetti() {
//     const confetti = document.createElement("div");
//     confetti.classList.add("confetti");

//     // Random horizontal position (viewport width)
//     confetti.style.left = Math.random() * 100 + "vw";
    
//     // Random color
//     confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    
//     // Random animation duration (2s to 5s)
//     confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

//     document.body.appendChild(confetti);
    
//     // Remove confetti after animation ends
//     setTimeout(() => {
//         confetti.remove();
//     }, 5000);
// }

// // Generate confetti every 100ms
// setInterval(createConfetti, 100);


// function signup(){
//     let div1 = document.querySelector(".div1");
//     div1.style.display="block";
//     if (div1) div1.style.display = "block"; 
//     document.getElementById("toggle-form").addEventListener("click", function (e) {
//         e.preventDefault();
        
//         let formTitle = document.getElementById("form-title");
//         let submitBtn = document.getElementById("submit-btn");
//         let confirmPasswordGroup = document.getElementById("confirm-password-group");
//         let gs1 = document.getElementById("gs1");
        
//         if (formTitle.textContent === "Login") {
//             formTitle.textContent = "Sign Up";
//             submitBtn.textContent = "Sign Up";
//             confirmPasswordGroup.style.display = "block";
//             this.textContent = "Login";
//             gs1.textContent="";
//             gs1.textContent="Have an account?";
//         } else {
//             formTitle.textContent = "Login";
//             submitBtn.textContent = "Login";
//             confirmPasswordGroup.style.display = "none";
//             this.textContent = "Sign Up";
//             gs1.textContent="";
//             gs1.textContent="Don't have an account?";
//     }
//     });
// }
document.addEventListener("DOMContentLoaded", function () {
    let div123 = document.querySelector(".div123"); // Select form container
    let toggleForm = document.getElementById("toggle-form");
    let formTitle = document.getElementById("form-title");
    let submitBtn = document.getElementById("submit-btn");
    let confirmPasswordGroup = document.getElementById("confirm-password-group");
    let gs1 = document.getElementById("gs1");

    // Show div123 when "Sign Up" is clicked
    document.querySelector(".sign-up").addEventListener("click", function (e) {
        e.preventDefault();
        div123.style.display = "block";
        div123.style.position= "relative";
        div123.style.right="300px" ;// Show the form container
        div123.style.bottom="80px" ;// Show the form container
    });

    // Toggle between Login & Sign-Up
    toggleForm.addEventListener("click", function (e) {
        e.preventDefault();
        if (formTitle.textContent === "Login") {
            formTitle.textContent = "Sign in";
            submitBtn.textContent = "Sign in";
            confirmPasswordGroup.style.display = "block";
            this.textContent = "Login";
            gs1.textContent = "Have an account?";
        } else {
            formTitle.textContent = "Login";
            submitBtn.textContent = "Login";
            confirmPasswordGroup.style.display = "none";
            this.textContent = "Sign up";
            gs1.textContent = "Don't have an account?";
        }
    });
});
document.getElementById("submit-btn").addEventListener("click", newpage);

document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents form from submitting the traditional way
    newpage();
});

function newpage() {
    localStorage.setItem("isLoggedIn", "true");
        window.location.href = "./page2.html";
   
}



let canvas=document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle{
constructor(x, y, size, color, velocity) 
{
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.width;
    this.size = Math.random() * 5+2;
    this.color = "red";
    this.velocity = {
        x:(Math.random() - 0.5) * 2,
        y:(Math.random() - 0.5) * 2
    };
    // this.alpha = 1;
}

draw()
{
    // ctx.save();
    // ctx.globalAlpha = this.alpha;
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    // ctx.fillStyle = this.color;
    // ctx.fill();
    // ctx.restore();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
}

update() 
{
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    if (this.x + this.size > canvas.width || this.x - this.size < 0){
        this.velocity.x *= -1;
    }
    if (this.y + this.size > canvas.width || this.y - this.size < 0){
        this.velocity.y *= -1;
    }
}
}
const particles = [];
for(let i=0; i< 30; i++){
    particles.push(new Particle());
}
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle =>{
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}
animate();
// console.log(canvas);
// const ctx = canvas.getContext("2d");
// const particle = new Particle(50,50,10,"red", {x:2,y:2});
// particle.draw(ctx);
// particle.update(canvas);