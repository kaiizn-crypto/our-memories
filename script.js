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
