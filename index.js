let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");

// FIXED TYPO HERE (was getElemntsById)
let guestScoreEl = document.getElementById("guest-score");

function addHome(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
}

function addGuest(points) {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
}
let winnerEl = document.getElementById("winner");

function newGame() {
    // 1. CALCULATE WINNER
    let message = "";

    if (homeScore > guestScore) {
        message = "🏆 HOME WINS! 🏆";
        winnerEl.style.color = "#F94F6D"; // Home color (Pink/Red)
    } else if (guestScore > homeScore) {
        message = "🏆 GUEST WINS! 🏆";
        winnerEl.style.color = "#F94F6D"; // Guest color
    } else if (homeScore === 0 && guestScore === 0) {
        message = "Start the game first!";
        winnerEl.style.color = "white";
    } else {
        message = "🤝 IT IS A DRAW! 🤝";
        winnerEl.style.color = "gold";
    }

    // 2. SHOW THE MESSAGE
    winnerEl.textContent = message;

    // 3. WAIT 2.5 SECONDS, THEN RESET
    // "setTimeout" takes two things: a function, and time in milliseconds
    setTimeout(function () {
        // Reset Logic
        homeScore = 0;
        guestScore = 0;
        homeScoreEl.textContent = homeScore;
        guestScoreEl.textContent = guestScore;

        // Clear the winner message
        winnerEl.textContent = "";
    }, 2500);
}