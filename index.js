let clickCount = 0;
const noBtn = document.getElementById("noBtn");
const questionText = document.getElementById("questionText");

const phrases = [
    "Are you sure??",
    "You don't want to??",
    "Come on, think again please?",
    "Last Chance!!!",
    "Surely not?",
    "That makes me sad",
    "Please reconsider!",
    "I'm begging you!",
    "One more try?",
    "Just say yes already!"
];

function handleNo() {
    clickCount++;

    if (clickCount <= phrases.length) {
        questionText.innerText = phrases[clickCount - 1];
    }

    if (clickCount > 1) {
        moveButton();
    }

    if (clickCount >= 10) {
        noBtn.style.display = "none";
        questionText.innerText = "Just Press Yes!!";
    }
}

function moveButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const maxX = window.innerWidth - btnWidth - 20; 
    const maxY = window.innerHeight - btnHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function sayYes() {
    window.location.href = "yes.html";
}