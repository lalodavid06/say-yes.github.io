const messages = [
    "¿Estás segura?",
    "¿De verdad segura?",
    "¿Segura? No sabes de lo que te pierdes",
    "Piénsalo por favor 🙏🏽.",
    "Recapacítalo, te conviene 😉",
    "Voy a estar muy triste si dices no",
    "No digas que no, sabes que te conviene 😑",
    "Se te acaba el tiempo, no pierdas tu oportunidad",
    "Ok, dejaré de preguntar.",
    "Sé que estás bromeando, ya di que si ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}