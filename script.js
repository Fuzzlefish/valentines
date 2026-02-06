// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const continueBtn = document.querySelector(".btn[alt='Continue']");
const quiz = document.getElementById("quiz");
const quizInput = document.getElementById("quiz-input");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);

    continueBtn.style.display = "none";
});

// Move NO button
noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES click
yesBtn.addEventListener("click", () => {
    title.textContent = "Good Girl 😛";
    catImg.src = "win-cat.jpg";

    document.querySelector(".letter-window").classList.add("final");

    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    continueBtn.style.display = "block";
});

// CONTINUE click
continueBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee! SHES MY VALENTINES WOOO";
    catImg.src = "cat_dance.gif";

    buttons.style.display = "none";
    quiz.style.display = "block";
});

// QUIZ LOGIC
function submitAnswer() {
    const userAnswer = quizInput.value.trim().toLowerCase();
    const correctAnswer = "everything";

    if (userAnswer === correctAnswer) {
        alert("Correct ❤️ Of course it's everything!");
        localStorage.setItem("quizAnswer", userAnswer);

        quiz.style.display = "none";
        finalText.style.display = "block";
        finalText.style.transform = "scale(0.75)";
        title.textContent = "To My Darling Girl"; 
        catImg.src = "myLove.jpeg";
        catImg.style.transition = "transform 0.5s ease";
        catImg.style.transform = "rotate(270deg) scale(1.5)";
        
    } else {
        alert("Nope 😛 Try again!");
        quizInput.value = "";
        quizInput.focus();
    }
}
