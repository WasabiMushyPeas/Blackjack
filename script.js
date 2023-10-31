// array of card images
var cardImages = [];
let bet = 50;
let opponentBet = 0;
let money = 500;
let opponentMoney = 500;

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
        "./svg_playing_cards/fronts/joker_black.svg",
        "./svg_playing_cards/fronts/joker_red.svg"
    ];

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
    document.getElementById("opponentBet").innerHTML = opponentBet;
}

function updateStats() {
    document.getElementById("money").innerHTML = money;
    document.getElementById("opponentMoney").innerHTML = opponentMoney;
    document.getElementById("bet").innerHTML = bet;
    document.getElementById("opponentBet").innerHTML = opponentBet;
}

function startGame() {
    //Hide bettingMenu
    document.getElementById("bettingMenu").style.display = "none";
    //Show game
    document.getElementById("gameBody").style.display = "flex";


}