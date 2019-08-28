/*
 * Create a list that holds all of your cards
 */
let cards = document.getElementsByClassName('card');
let Deck = Array.from(cards);
let shuffled = Array.from(cards);
console.log(Deck);
console.log(shuffled);


//Display the cards on the page
//  SHOW FOR TESTING 
/*
Deck.forEach(function (card) {
    card.classList.add('match');
});

*/



/// HIDE


Deck.forEach(function (card) {
    card.classList.remove('match');
    card.classList.remove('open');
    card.classList.remove('show');
});
 

// shuffle the list of cards using the provided "shuffle" method below


shuffled = shuffle(shuffled);






//   - loop through each card and create its HTML

let arrInnerHTML = [];
shuffled.forEach(function (card) {
    arrInnerHTML.push(card.innerHTML);
});

console.log(arrInnerHTML);

//  - add each card's HTML to the page
for (var i = 0; i < Deck.length; i++) {
    Deck[i].innerHTML = arrInnerHTML[i];
}


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


//set up the event listener for a card. If a card is clicked:
Deck.forEach(function (card, index, array) {
    card.addEventListener('click', displayCard);

});



  
   
//  - display the card's symbol (put this functionality in another function that you call from this one)
function displayCard(e) {
    if (openCards.length < 2) {
        // card.classList.remove('match');
        if (e.target.classList.contains('card')
            && e.target.classList.contains('open') === false) {
            e.target.classList.add('open');
            e.target.classList.add('show');
            addToOpen(e);
            moveCounter();
         
        }
      

    }

}

  
   
    
     //  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
let openCards = [];

function addToOpen(e) {
    if (e.target.classList.contains('open')
        && e.target.classList.contains('card')) {
        openCards.push(e.target);
        console.log(e.target.innerHTML);
       
    }
    if (openCards.length === 2) {
        setTimeout(matchCards, 1000);
    }    
    
}
//  - if the list already has another card, check to see if the two cards match

function matchCards() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add('match');
        openCards[1].classList.add('match');
        openCards[0].classList.remove('open');
        openCards[0].classList.remove('show');
        openCards[1].classList.remove('open');
        openCards[1].classList.remove('show');
        openCards = [];
        checkIfGameOver()
    } else {
        openCards[0].classList.remove('open');
        openCards[0].classList.remove('show');
        openCards[1].classList.remove('open');
        openCards[1].classList.remove('show');
        openCards = [];
    }
    
}  
   //    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 
  
   //    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 
  
//    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)

let counter = document.querySelector('.moves');
let moveAmt = 0;
counter.innerHTML = 0;
function moveCounter() {
    moveAmt++;
    counter.innerHTML = moveAmt;
}



  //    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
let header = document.querySelector('header');
function checkIfGameOver() {
    let locked = 0;
    Deck.forEach(function (card) {
        if (card.classList.contains('match')) {
            locked++;

        }
        if (locked === 16) {
           
            header.innerHTML = 'WINNER';
        }
    })
}