// array of card images
var cardImages = [];
var cardValues = {};
let bet = 50;
let opponentBet = 0;
let money = 500;
let opponentMoney = 500;
let opponentCards = 0;
let playerCards = 0;
let playerCount = 0;
let opponentCount = 0;
let playerAlive = true;
let opponentAlive = true;
let stood = false;
let winStatus = "Error";

function start() {

    cardImages = [
        "./svg_playing_cards/fronts/clubs_ace.svg",
        "./svg_playing_cards/fronts/clubs_2.svg",
        "./svg_playing_cards/fronts/clubs_3.svg",
        "./svg_playing_cards/fronts/clubs_4.svg",
        "./svg_playing_cards/fronts/clubs_5.svg",
        "./svg_playing_cards/fronts/clubs_6.svg",
        "./svg_playing_cards/fronts/clubs_7.svg",
        "./svg_playing_cards/fronts/clubs_8.svg",
        "./svg_playing_cards/fronts/clubs_9.svg",
        "./svg_playing_cards/fronts/clubs_10.svg",
        "./svg_playing_cards/fronts/clubs_jack.svg",
        "./svg_playing_cards/fronts/clubs_queen.svg",
        "./svg_playing_cards/fronts/clubs_king.svg",
        "./svg_playing_cards/fronts/diamonds_ace.svg",
        "./svg_playing_cards/fronts/diamonds_2.svg",
        "./svg_playing_cards/fronts/diamonds_3.svg",
        "./svg_playing_cards/fronts/diamonds_4.svg",
        "./svg_playing_cards/fronts/diamonds_5.svg",
        "./svg_playing_cards/fronts/diamonds_6.svg",
        "./svg_playing_cards/fronts/diamonds_7.svg",
        "./svg_playing_cards/fronts/diamonds_8.svg",
        "./svg_playing_cards/fronts/diamonds_9.svg",
        "./svg_playing_cards/fronts/diamonds_10.svg",
        "./svg_playing_cards/fronts/diamonds_jack.svg",
        "./svg_playing_cards/fronts/diamonds_queen.svg",
        "./svg_playing_cards/fronts/diamonds_king.svg",
        "./svg_playing_cards/fronts/hearts_ace.svg",
        "./svg_playing_cards/fronts/hearts_2.svg",
        "./svg_playing_cards/fronts/hearts_3.svg",
        "./svg_playing_cards/fronts/hearts_4.svg",
        "./svg_playing_cards/fronts/hearts_5.svg",
        "./svg_playing_cards/fronts/hearts_6.svg",
        "./svg_playing_cards/fronts/hearts_7.svg",
        "./svg_playing_cards/fronts/hearts_8.svg",
        "./svg_playing_cards/fronts/hearts_9.svg",
        "./svg_playing_cards/fronts/hearts_10.svg",
        "./svg_playing_cards/fronts/hearts_jack.svg",
        "./svg_playing_cards/fronts/hearts_queen.svg",
        "./svg_playing_cards/fronts/hearts_king.svg",
        "./svg_playing_cards/fronts/spades_ace.svg",
        "./svg_playing_cards/fronts/spades_2.svg",
        "./svg_playing_cards/fronts/spades_3.svg",
        "./svg_playing_cards/fronts/spades_4.svg",
        "./svg_playing_cards/fronts/spades_5.svg",
        "./svg_playing_cards/fronts/spades_6.svg",
        "./svg_playing_cards/fronts/spades_7.svg",
        "./svg_playing_cards/fronts/spades_8.svg",
        "./svg_playing_cards/fronts/spades_9.svg",
        "./svg_playing_cards/fronts/spades_10.svg",
        "./svg_playing_cards/fronts/spades_jack.svg",
        "./svg_playing_cards/fronts/spades_queen.svg",
        "./svg_playing_cards/fronts/spades_king.svg",
    ];

    cardValues = {
        "./svg_playing_cards/fronts/clubs_ace.svg": 1,
        "./svg_playing_cards/fronts/clubs_2.svg": 2,
        "./svg_playing_cards/fronts/clubs_3.svg": 3,
        "./svg_playing_cards/fronts/clubs_4.svg": 4,
        "./svg_playing_cards/fronts/clubs_5.svg": 5,
        "./svg_playing_cards/fronts/clubs_6.svg": 6,
        "./svg_playing_cards/fronts/clubs_7.svg": 7,
        "./svg_playing_cards/fronts/clubs_8.svg": 8,
        "./svg_playing_cards/fronts/clubs_9.svg": 9,
        "./svg_playing_cards/fronts/clubs_10.svg": 10,
        "./svg_playing_cards/fronts/clubs_jack.svg": 10,
        "./svg_playing_cards/fronts/clubs_queen.svg": 10,
        "./svg_playing_cards/fronts/clubs_king.svg": 10,
        "./svg_playing_cards/fronts/diamonds_ace.svg": 1,
        "./svg_playing_cards/fronts/diamonds_2.svg": 2,
        "./svg_playing_cards/fronts/diamonds_3.svg": 3,
        "./svg_playing_cards/fronts/diamonds_4.svg": 4,
        "./svg_playing_cards/fronts/diamonds_5.svg": 5,
        "./svg_playing_cards/fronts/diamonds_6.svg": 6,
        "./svg_playing_cards/fronts/diamonds_7.svg": 7,
        "./svg_playing_cards/fronts/diamonds_8.svg": 8,
        "./svg_playing_cards/fronts/diamonds_9.svg": 9,
        "./svg_playing_cards/fronts/diamonds_10.svg": 10,
        "./svg_playing_cards/fronts/diamonds_jack.svg": 10,
        "./svg_playing_cards/fronts/diamonds_queen.svg": 10,
        "./svg_playing_cards/fronts/diamonds_king.svg": 10,
        "./svg_playing_cards/fronts/hearts_ace.svg": 1,
        "./svg_playing_cards/fronts/hearts_2.svg": 2,
        "./svg_playing_cards/fronts/hearts_3.svg": 3,
        "./svg_playing_cards/fronts/hearts_4.svg": 4,
        "./svg_playing_cards/fronts/hearts_5.svg": 5,
        "./svg_playing_cards/fronts/hearts_6.svg": 6,
        "./svg_playing_cards/fronts/hearts_7.svg": 7,
        "./svg_playing_cards/fronts/hearts_8.svg": 8,
        "./svg_playing_cards/fronts/hearts_9.svg": 9,
        "./svg_playing_cards/fronts/hearts_10.svg": 10,
        "./svg_playing_cards/fronts/hearts_jack.svg": 10,
        "./svg_playing_cards/fronts/hearts_queen.svg": 10,
        "./svg_playing_cards/fronts/hearts_king.svg": 10,
        "./svg_playing_cards/fronts/spades_ace.svg": 1,
        "./svg_playing_cards/fronts/spades_2.svg": 2,
        "./svg_playing_cards/fronts/spades_3.svg": 3,
        "./svg_playing_cards/fronts/spades_4.svg": 4,
        "./svg_playing_cards/fronts/spades_5.svg": 5,
        "./svg_playing_cards/fronts/spades_6.svg": 6,
        "./svg_playing_cards/fronts/spades_7.svg": 7,
        "./svg_playing_cards/fronts/spades_8.svg": 8,
        "./svg_playing_cards/fronts/spades_9.svg": 9,
        "./svg_playing_cards/fronts/spades_10.svg": 10,
        "./svg_playing_cards/fronts/spades_jack.svg": 10,
        "./svg_playing_cards/fronts/spades_queen.svg": 10,
        "./svg_playing_cards/fronts/spades_king.svg": 10,
    };


    updateStats();
    opponentRandBet();
}

function decreaseBet() {
    if (bet - 50 > 0) {
        bet -= 50;
    }
    updateStats();
}

function increaseBet() {
    if (bet + 50 <= money) {
        bet += 50;
    }
    updateStats();
}


function opponentRandBet() {
    opponentBet = Math.floor(Math.random() * opponentMoney);
    // loop through all opponentBet classes and update the text
    let htmlOpponentBet = document.getElementsByClassName("opponentBet");
    for (let i = 0; i < htmlOpponentBet.length; i++) {
        htmlOpponentBet[i].innerHTML = opponentBet;
    }
}

function updateStats() {
    let htmlMoney = document.getElementsByClassName("money");
    let htmlOpponentMoney = document.getElementsByClassName("opponentMoney");
    let htmlBet = document.getElementsByClassName("bet");
    let htmlOpponentBet = document.getElementsByClassName("opponentBet");
    document.getElementById("playerCount").innerHTML = playerCount;
    document.getElementById("opponentCount").innerHTML = opponentCount;
    document.getElementById("winStatus").innerHTML = winStatus;


    for (let i = 0; i < htmlMoney.length; i++) {
        htmlMoney[i].innerHTML = money;
    }
    for (let i = 0; i < htmlOpponentMoney.length; i++) {
        htmlOpponentMoney[i].innerHTML = opponentMoney;
    }
    for (let i = 0; i < htmlBet.length; i++) {
        htmlBet[i].innerHTML = bet;
    }
    for (let i = 0; i < htmlOpponentBet.length; i++) {
        htmlOpponentBet[i].innerHTML = opponentBet;
    }
}

function startGame() {
    //Hide bettingMenu
    document.getElementById("bettingMenu").style.display = "none";
    //Show game
    document.getElementById("gameBody").style.display = "flex";

    updateStats();

    playerAlive = true;
    opponentAlive = true;
}

function stand() {
    //runPlayerTurns();
    stood = true;
    checkWin();
}

function hit() {
    let card = getRandomCard();
    let cardValue = getCardValue(card);


    calculatePlayerCount(card);
    createHTMLCardPlayer(card);
    updateStats();
    hitOpponent();
    checkPlayerDeath();
    checkOpponentDeath();
    checkWin();
}

function hitOpponent() {
    let card = getRandomCard();
    let cardValue = getCardValue(card);

    calculateOpponentCount(card);
    createHTMLCardOpponent(card);
    updateStats();
    checkOpponentDeath();
    checkPlayerDeath();
}

function getRandomCard() {
    let randomCard = cardImages[Math.floor(Math.random() * cardImages.length)];
    return randomCard;
}

function getCardValue(card) {
    return cardValues[card];
}

function createHTMLCardPlayer(card) {
    let htmlCard = document.createElement("img");
    let htmlCardDiv = document.createElement("div");

    // div style
    htmlCardDiv.style.scale = "80%";


    // stack the cards
    if (playerCards == 0) {
        htmlCardDiv.style.marginLeft = "5%";
    } else {
        htmlCardDiv.style.marginLeft = "-200px";
    }

    htmlCard.src = card;
    htmlCard.classList.add("playCard");
    htmlCardDiv.classList.add("playCardDiv");
    document.getElementById("playerSideTable").appendChild(htmlCardDiv);
    htmlCardDiv.appendChild(htmlCard);
    playerCards++;
}

function createHTMLCardOpponent(card) {
    let htmlCard = document.createElement("img");
    let htmlCardDiv = document.createElement("div");

    // div style
    htmlCardDiv.style.scale = "80%";


    // stack the cards
    if (opponentCards == 0) {
        htmlCardDiv.style.marginLeft = "5%";
    } else {
        htmlCardDiv.style.marginLeft = "-200px";
    }


    htmlCard.src = card;
    htmlCard.classList.add("playCard");
    htmlCardDiv.classList.add("playCardDiv");
    document.getElementById("opponentSideTable").appendChild(htmlCardDiv);
    htmlCardDiv.appendChild(htmlCard);
    opponentCards++;
}

function calculatePlayerCount(card) {
    if (playerAlive == true) {
        if (cardValues[card] == 1) {
            if (playerCount + 11 > 21) {
                playerCount += 1;
            } else {
                playerCount += 11;
            }
        } else {
            playerCount += getCardValue(card);
        }
    }
}

function calculateOpponentCount(card) {
    if (opponentAlive == true) {
        if (cardValues[card] == 1) {
            if (opponentCount + 11 > 21) {
                opponentCount += 1;
            } else {
                opponentCount += 11;
            }
        } else {
            opponentCount += getCardValue(card);
        }
    }

}

function checkPlayerDeath() {
    if (playerCount > 21) {
        playerAlive = false;
    }
}

function checkOpponentDeath() {
    if (opponentCount > 21) {
        opponentAlive = false;
    }
}

function runPlayerTurn() {
    if (playerCount <= 17) {
        hitOpponent();
    }
}

function runPlayerTurns() {
    while (playerCount <= 17) {
        hitOpponent();
    }
}

function checkWin() {
    if (playerAlive == false) {
        console.log("You lose");
        winStatus = "You lose";
        money -= bet;
        opponentMoney += opponentBet;
        winPopup();
    }
    if (opponentAlive == false) {
        console.log("You win");
        winStatus = "You win";
        money += bet;
        opponentMoney -= opponentBet;
        winPopup();
    }
    if (opponentCount > playerCount && stood == true) {
        console.log("You lose");
        winStatus = "You lose";
        money -= bet;
        opponentMoney += opponentBet;
        winPopup();
    } else if (opponentCount < playerCount && stood == true) {
        console.log("You win");
        winStatus = "You win";
        money += bet;
        opponentMoney -= opponentBet;
        winPopup();
    } else if (opponentCount == playerCount && stood == true) {
        console.log("Draw");
        winStatus = "Draw";
        winPopup();
    }
}

function winPopup() {
    document.getElementsByClassName("endGame")[0].style.display = "flex";
    updateStats();
}