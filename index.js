let homePoint = document.getElementById("increment-score-home");
let guestPoint = document.getElementById("increment-score-guest");
let homeScore = 0;
let guestScore = 0;
let currentDate = new Date();


function homePointOne() {
    homeScore += 1;
    homePoint.textContent = homeScore;
    updateScores()
}

function homePointsTwo() {
    homeScore += 2;
    homePoint.textContent = homeScore;
    updateScores()
}

function homePointsThree() {
    homeScore += 3;
    homePoint.textContent = homeScore;
    updateScores()
}

function guestPointOne() {
    guestScore += 1;
    guestPoint.textContent = guestScore;
    updateScores()
}

function guestPointsTwo() {
    guestScore += 2;
    guestPoint.textContent = guestScore;
    updateScores()
}

function guestPointsThree() {
    guestScore += 3;
    guestPoint.textContent = guestScore;
    updateScores()
}

function newGame(){
    homeScore = 0;
    guestScore = 0;
    updateScores()
}

function updateColor() {
           if (homeScore > guestScore) {
                homePoint.style.color = "lightgreen";
                guestPoint.style.color = "lightcoral";
            } else if (homeScore < guestScore) {
                homePoint.style.color = "lightcoral";
                guestPoint.style.color = "lightgreen";
            } else {
                homePoint.style.color = "blue";
                guestPoint.style.color = "blue";
            }
        }
        
function updateScores() {
            homePoint.textContent = homeScore;
            guestPoint.textContent = guestScore;
            updateColor();
        }
updateScores();

function getCurrentTime() {
            let now = new Date();
            let hours = now.getHours().toString();
            let minutes = now.getMinutes().toString();
            let seconds = now.getSeconds().toString();
            return `${hours}:${minutes}:${seconds}`;
        }
        
function updateDateTime(){  
    document.getElementById("current-time").textContent = getCurrentTime();
    document.getElementById("current-date").textContent = currentDate.toLocaleDateString();
}   

updateDateTime()
setInterval(updateDateTime, 1);