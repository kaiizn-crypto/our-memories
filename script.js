:::writing?variant=“standard” id=“73103”}
// WELCOME SCREEN

function enterWebsite() {
    const welcome = document.getElementById("welcome-screen");

welcome.classList.add("hide");

document.getElementById("main-content").style.display = "block";
}

// LOVE LETTER

function openLetter() {
    const letter = document.getElementById("letter-box");
letter.classList.toggle("show");
const button = document.getElementById("letter-button");
if (letter.classList.contains("show")) {
button.textContent = "Close My Letter";
} else {
button.textContent = "Open My Letter";
}

// SECOND ANNIVERSARY COUNTDOWN

const anniversaryDate = new Date(“2027-09-27T00:00:00+07:00”);

function updateCountdown() { const anniversary = new Date("2027-09-27T00:00:00+07:00"); const now = new Date();
const difference = anniversary - now;

if (difference <= 0) return;

const days = Math.floor(difference / (1000 * 60 * 60 * 24));
const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((difference / (1000 * 60)) % 60);
const seconds = Math.floor((difference / 1000) % 60);

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;
}
updateCountdown(); setInterval(updateCountdown, 1000);
