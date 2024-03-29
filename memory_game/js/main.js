var cards = [{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
}, {
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
}, {
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
}, {
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}];

var cardsInPlay = [];
var flipCount = 0;

function checkForMatch() {
	if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("MATCH FOUND!");
     
    } else {
      alert("SORRY, TRY AGAIN!");

      
    };
  };
};

function flipCard() {
	
var cardId = this.getAttribute('data-id');
this.setAttribute('src',cards[cardId].cardImage);
console.log("User Flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
};

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
   var cardElement = document.createElement('img');
   cardElement.setAttribute('src','images/back.png');
   cardElement.setAttribute('data-id',i)
   cardElement.addEventListener('click',flipCard);
   document.getElementById('game-board').appendChild(cardElement);
}
}
createBoard();