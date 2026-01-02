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

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}