// Variable declarations
let deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
let playerHand = [];
let dealerHand = [];
playerBets = [];
// let playerBets = [];
let playerTotal = 0;
let dealerTotal = 0;
let pickCard;

// Cached element references
let message = document.getElementById('message');
let message1 = document.getElementById('message1');
let message2 = document.getElementById('message2');
let standBtn = document.getElementById('standBtn');
let splitBtn = document.getElementById('splitBtn');
let playerCard2 = document.getElementById('playerCard2');
let playerCard3 = document.getElementById('playerCard3');
let playerCard4 = document.getElementById('playerCard4');
let playerCard5 = document.getElementById('playerCard5');
let playerCard6 = document.getElementById('playerCard6');
let dealerCard0 = document.getElementById('back-red');
let messagetotal = document.getElementById('messagetotal');
let dealerCard2=document.getElementById('dealerCard2');
let messageResults=document.getElementById('messageResults');
let reset=document.getElementById('reset')
// Event listeners

dealBtn.addEventListener('click', dealHand);
hitBtn.addEventListener('click', handleHitBtn);
standBtn.addEventListener('click', handleStandBtn);
reset.addEventListener('click', clearHand);


// Initialization resets deck and both hands
function init() {
    deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
    playerHand = [];
    dealerHand = [];
    render();
}

function hideDealBtn(){
    dealBtn.classList.add('hidden');
}
function ShowDealBtn(){
    dealBtn.classList.remove('hidden');
}

function showHitBtn(){
    hitBtn.classList.remove('hidden');
}


function hideStandPlayAgain(){
    standBtn.classList.add('hidden');
    reset.classList.add('hidden');
} 

function showStandPlayAgain(){
    standBtn.classList.remove('hidden');
    reset.classList.remove('hidden');
} 

function showHitDoubleStand(){
    hideDealBtn();
    hitBtn.classList.remove('hidden');
    standBtn.classList.remove('hidden');
    reset.classList.remove('hidden')
}

// Deals the first 4 cards in the round
function dealHand() {

    setTimeout(() => {
        let pickCard = drawCard();
        dealerHand.push(`${pickCard}`);
        render();
    }, 500);
    setTimeout(() => {
        let pickCard = drawCard();
        playerHand.push(`${pickCard}`);
        render();
    }, 1000);
    setTimeout(() => {
        let pickCard = drawCard();
        dealerHand.push(`${pickCard}`);
        render();
    }, 1500);
    setTimeout(() => {
        let pickCard = drawCard();
        playerHand.push(`${pickCard}`);
        render();
    }, 2000);
    setTimeout(getTotals, 2500);
    
    showHitDoubleStand();

};


function handleStandBtn(){
    getTotals();
    checkForDWin();
    checkForPWin();
    
    document.getElementById('dealerCard0').classList.remove('back-red');
    document.getElementById(`dealerCard0`).classList.add(`${dealerHand[0]}`)
    
    if(dealerTotal < 17){
            setTimeout(() => {
            dealerCard2.classList.remove('hidden');
            let pickCard = drawCard();
            dealerHand.push(`${pickCard}`);
            dealerCard2.classList.add(pickCard);
            getTotals();
            checkForDWin()
            checkForPWin();
            render();
            }, 0);
    }else
    if(dealerTotal < 17){
            setTimeout(() => {
            dealerCard3.classList.remove('hidden');
            let pickCard = drawCard();
            dealerHand.push(`${pickCard}`);
            dealerCard3.classList.add(pickCard);
            getTotals();
            checkForDWin();
            checkForPWin();
            render();
            }, 200);
    }else
    if(dealerTotal < 17){
            setTimeout(() => {
            dealerCard4.classList.remove('hidden');
            let pickCard = drawCard();
            dealerHand.push(`${pickCard}`);
            dealerCard4.classList.add(pickCard);
            getTotals();
            checkForDWin()
            checkForPWin();
            render();
            }, 600);
    }else
    if(dealerTotal < 17){
            setTimeout(() => {
            dealerCard5.classList.remove('hidden');
            let pickCard = drawCard();
            dealerHand.push(`${pickCard}`);
            dealerCard5.classList.add(pickCard);
            getTotals();
            checkForDWin()
            checkForPWin();
            render();
            }, 650);
    }else
    if(dealerTotal < 17){
            setTimeout(() => {
            dealerCard5.classList.remove('hidden');
            let pickCard = drawCard();
            dealerHand.push(`${pickCard}`);
            dealerCard5.classList.add(pickCard);
            getTotals();
            checkForDWin()
            checkForPWin();
            render();
            }, 700);
    }
        
    render();
    
    }

function handleHitBtn(evt){

    getTotals();
    checkForDWin();
    checkForPWin();

    playerCard2.classList.remove('hidden');
    if(playerHand.length === 2){
            pickCard = drawCard();
            playerHand.push(`${pickCard}`);
            playerCard2.classList.add(pickCard);
            getTotals();
            showHitDoubleStand();

            document.getElementById('dealerCard0').classList.remove('back-red');
            document.getElementById(`dealerCard0`).classList.add(`${dealerHand[0]}`)
            render();

        }else if(playerHand.length === 3){
        playerCard3.classList.remove('hidden');
            pickCard = drawCard();
            playerHand.push(`${pickCard}`);
            playerCard3.classList.add(pickCard);
            getTotals();
            showHitDoubleStand();

            document.getElementById('dealerCard0').classList.remove('back-red');
            document.getElementById(`dealerCard0`).classList.add(`${dealerHand[0]}`)
            render();

        }else if(playerHand.length === 4){
        playerCard4.classList.remove('hidden');
            pickCard = drawCard();
            playerHand.push(`${pickCard}`);
            playerCard4.classList.add(pickCard);

            getTotals();
            showHitDoubleStand();

            document.getElementById('dealerCard0').classList.remove('back-red');
            document.getElementById(`dealerCard0`).classList.add(`${dealerHand[0]}`)
            render();

        }else if(playerHand.length === 5){
        playerCard5.classList.remove('hidden');
            pickCard = drawCard();
            playerHand.push(`${pickCard}`);
            playerCard4.classList.add(pickCard);

            getTotals();
            showHitDoubleStand();

            document.getElementById('dealerCard0').classList.remove('back-red');
            document.getElementById(`dealerCard0`).classList.add(`${dealerHand[0]}`)
            render();

        }else if(playerHand.length === 6){
            playerCard6.classList.remove('hidden');
            pickCard = drawCard();
            playerHand.push(`${pickCard}`);
            playerCard4.classList.add(pickCard);

            getTotals();
            render();
            showHitDoubleStand();
            }
        }
// Calculates the card totals for each hand
function getTotals() {
    dealerTotal = 0;
    playerTotal = 0;
    for (i=0; i< dealerHand.length; i++) {
        dealerTotal += cardLookup(`${dealerHand[i]}`)
    }
    for (i=0; i< playerHand.length; i++) {
        playerTotal += cardLookup(`${playerHand[i]}`)
    }
    render();
}

// Clears the cards on the table
function clearHand() {
    

    for (i=0; i<= playerHand.length; i++) {
        let removeCard = playerHand.splice(0, 1);
        document.getElementById(`playerCards${i}`).classList.remove(`${removeCard}`);
        
    }
    for (i=0; i<= dealerHand.length; i++) {
        let removeCard = dealerHand.splice(0, 1);
        document.getElementById(`dealerCards${i}`).classList.remove(`${removeCard}`);
        
    }
    init();
    ShowDealBtn();
}

// Function to randomly pick a card from the ones remaining in the deck
function drawCard() {
    randIdx = Math.floor(Math.random() * deck.length);
    cardDrawn = deck.splice(randIdx, 1);
    return cardDrawn;
}

// Reshuffles the deck
function shuffleDeck(cardsToShuffle) {
    let shuffledCards = [];
    let shuffled;

    for (i=30; i=cardsToShuffle.length; i++){
            randIdx=Math.floor(Math.random()*cardsToShuffle.length);
            shuffled = cardsToShuffle.splice(randIdx, 1);
            shuffledCards.push(`${shuffled}`);
     }

    message.textContent = 'Cards Low, Deck Shuffled';
    deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
    playerHand = [];
    dealerHand = [];
    render();
    return shuffledCards;
}

// Looks up the card passed in and returns a numerical value for it
function cardLookup(card) {
    let cardValue;
    if (card === "dA" && playerHand.length === 2 && playerTotal === 11 || card === "hA" && playerHand.length === 2 && playerTotal === 11  || card ==="cA" && playerHand.length === 2 && playerTotal === 11  || card === "sA" && playerHand.length === 2 && playerTotal === 11 ){
        cardValue = 11;
    }else
    if (card === "dA" && dealerHand.length === 2 && dealerTotal === 11  || card === "hA" && dealerHand.length === 2  && dealerTotal === 11 || card ==="cA" && dealerHand.length === 2 && dealerTotal === 11 || card === "sA" && dealerHand.length === 2 && dealerTotal === 11){
        cardValue = 11;
    }else
    if (card === "dA" && playerTotal === 10 || card === "hA" && playerTotal === 10 || card ==="cA" && playerTotal === 10 || card === "sA" && playerTotal === 10){
        cardValue = 11;
    }else
    if (card === "dA" && dealerTotal === 10 || card === "hA" && dealerTotal === 10 || card ==="cA" && dealerTotal === 10 || card === "sA" && dealerTotal === 10){
    cardValue = 11;
    }else
    if (card === "dA" && dealerTotal < 10 || card === "hA" && dealerTotal < 10 || card ==="cA" && dealerTotal < 10 || card === "sA" && dealerTotal < 10){
    cardValue = 11;
    }else
    if (card === "dA" && playerTotal < 10 || card === "hA" && playerTotal < 10 || card ==="cA" && playerTotal < 10 || card === "sA" && playerTotal < 10){
        cardValue = 11;
    }else
    if (card === "dA" && playerTotal > 10 && playerTotal < 21|| card === "hA" && playerTotal >= 10 && playerTotal < 21 || 
    card ==="cA" && playerTotal > 10 && playerTotal < 21 || card === "sA" && playerTotal > 10 && playerTotal < 21){
            cardValue = 1;
    }else
    if (card === "dA" && dealerTotal > 10 && dealerTotal < 21 || card === "hA" && dealerTotal > 10 && dealerTotal < 21|| 
    card ==="cA" && dealerTotal > 10 && dealerTotal < 21 || card === "sA" && dealerTotal > 10 && dealerTotal < 21){
            cardValue = 1;
    }else
    if (card === "dA" && playerTotal > 10 && playerTotal > 21|| card === "hA" && playerTotal > 10 && playerTotal > 21 || 
        card ==="cA" && playerTotal > 10 && playerTotal > 21 || card === "sA" && playerTotal > 10 && playerTotal > 21){
                cardValue = 1;
    }else
    if (card === "dA" && dealerTotal > 10 && dealerTotal > 21 || card === "hA" && dealerTotal > 10 && dealerTotal > 21|| 
        card ==="cA" && dealerTotal > 10 && dealerTotal > 21 || card === "sA" && dealerTotal > 10 && dealerTotal > 21){
                cardValue = 1;
    }else
    if (card === "dQ" || card === "hQ" || card === "cQ" || card === "sQ" ||
        card === "dK" || card === "hK" || card === "cK" || card === "sK" ||
        card === "dJ" || card === "hJ" || card === "cJ" || card === "sJ" ||
        card === "d10" || card === "h10" || card === "c10" || card === "s10"){
        cardValue = 10;
    }else
    if (card === "d09" || card === "h09" || card ==="c09" || card === "s09"){
        cardValue = 9;
    }else
    if (card === "d08" || card === "h08" || card ==="c08" || card === "s08"){
        cardValue = 8;
    }else
    if (card === "d07" || card === "h07" || card ==="c07" || card === "s07"){
        cardValue = 7;
    }else
    if (card === "d06" || card === "h06" || card ==="c06" || card === "s06"){
        cardValue = 6;
    }else
    if (card === "d05" || card === "h05" || card ==="c05" || card === "s05"){
        cardValue = 5;
    }else
    if (card === "d04" || card === "h04" || card ==="c04" || card === "s04"){
        cardValue = 4;
    }else
    if (card === "d03" || card === "h03" || card ==="c03" || card === "s03"){
        cardValue = 3;
    }else
    if (card === "d02" || card === "h02" || card ==="c02" || card === "s02"){
        cardValue = 2;
    }    
    return cardValue;
}

// Adjusts all CSS for cards to be rendered
function render() {
    // betAmount.textContent = `$ ${betAmount}`;
    if (dealerHand.length >= 2){
        message1.textContent = `Dealer Hands: ${dealerTotal}`;
    }
    if (playerHand.length >= 2){
        message2.textContent = `Your Hands: ${playerTotal}`;
    }
    if (deck.length < 26) {
        document.getElementById('drawPile').classList.remove('shadow');
    }
    if (playerHand.length) {
        for (i=0; i < playerHand.length; i++) {
            document.getElementById(`playerCard${i}`).classList.add(`${playerHand[i]}`)
            document.getElementById(`playerCard${i}`).classList.remove('outline');
        }
    } else {
        document.getElementById('playerCard0').classList.add('outline');
        document.getElementById('playerCard1').classList.add('outline');
    }
    if (dealerHand.length === 1) {
        document.getElementById('dealerCard0').classList.add('back-red');
        document.getElementById('dealerCard0').classList.remove('outline');
    }
    if (dealerHand.length > 1) {    
        for (i=1; i <= playerHand.length; i++) {
            document.getElementById(`dealerCard1`).classList.add(`${dealerHand[i]}`)
            document.getElementById(`dealerCard1`).classList.remove('outline');}
    }
    
}
    
function flipDealerCard(){
        message1.classList.remove('hidden');
        if(dealerHand.length === 2 && playerHand === 2);
            document.getElementById('dealerCard0').classList.remove('back-red');
            document.getElementById(`dealerCard0`).classList.add(`${dealerHand[0]}`)
            
}
function checkForDWin(){
    getTotals();
    render();
    //for blackjack
    if(dealerHand.length === 2 && playerHand.length === 2 && dealerTotal === 21 && dealerTotal > playerTotal ){
            messagetotal.textContent = `BlackJack! Dealer Wins!`;
            return true;
    }else
    if(playerHand.length === 2 && dealerHand.length === 2 && playerTotal === 21 && playerTotal > dealerTotal ){
                messagetotal.textContent = `BlackJack! You Win!`; 
                return true;
    }else
    if(dealerTotal > playerTotal && dealerTotal < 21){
            messagetotal.textContent = `Dealer Wins!!`
            return true; 
    }else
    if(playerTotal > dealerTotal && playerTotal > 16 && playerTotal < 21){
        messagetotal.textContent = `You Win!!`
        return true; 
    }else
    if(dealerHand.length === 2 && playerHand.length === 2 && dealerTotal === playerTotal && dealerTotal > 16 && dealerTotal < 21){
        messagetotal.textContent = `It's a push!!`
        return true; 
    }else
    if(playerHand.length === 2 && dealerHand.length === 2 && playerTotal === dealerTotal && playerTotal > 16 && playerTotal < 21){
                    messagetotal.textContent = `It's a push!!`
                    return true; 
    }else
    if(dealerTotal > 21){
        messagetotal.textContent = `Dealer BUST!!! You WIN!!`
        return true;
    }else
    if(playerTotal > 21){
        messagetotal.textContent = `You Busts!!!`
        return true;
    }else
    if(dealerHand.length > 2 && dealerTotal > 16 && dealerTotal < 21 && dealerTotal > playerTotal){
        messagetotal.textContent =`Dealer Wins!!`
        return true;
    }else
    if(playerHand.length > 2 && playerTotal < 21 && playerTotal > dealerTotal){
            messagetotal.textContent =`You Win!!`
            return true;
    }else
    if(playerHand.length > 2 && playerTotal > dealerTotal && playerTotal < 21){
        messagetotal.textContent =`You Win!!`
        return true;
    }else
    if(playerHand.length > 2 && playerTotal > dealerTotal && playerTotal < 21){
            messagetotal.textContent =`You Win!!`
            return true;
    }else
    if(dealerHand.length > 2 && dealerTotal > playerTotal && dealerTotal < 21){
            messagetotal.textContent =`Dealer Wins!!`
            return true;
    }else
    if(dealerHand.length > 2 && dealerTotal === 21 && dealerTotal > playerTotal){
            messagetotal.textContent =`Dealer Wins!!`
            return true;
    }else
    if(playerHand.length > 2 && playerTotal === 21 && playerTotal > dealerTotal){
                messagetotal.textContent =`You Win!!`
                return true;
    }else 
    if(dealerHand.length > 2 && dealerTotal === playerTotal){
        messagetotal.textContent = `It's a Push!!`
        return true;
    }else
    if(playerHand.length > 2 && playerTotal === dealerTotal){
        messagetotal.textContent = `It's a Push!!`
        return true;
    }

}

function checkForPWin(){
    getTotals();
    render();
    //for blackjack
    if(dealerHand.length === 2 && playerHand.length === 2 && dealerTotal === 21 && dealerTotal > playerTotal ){
            messagetotal.textContent = `BlackJack! Dealer Wins!`;
            return true;
    }else
    if(playerHand.length === 2 && dealerHand.length === 2 && playerTotal === 21 && playerTotal > dealerTotal ){
                messagetotal.textContent = `BlackJack! You Win!`; 
                return true;
    }else
    if(dealerTotal > playerTotal && dealerTotal < 21){
            messagetotal.textContent = `Dealer Wins!!`
            return true; 
    }else
    if(playerTotal > dealerTotal && playerTotal > 16 && playerTotal < 21){
        messagetotal.textContent = `You Win!!`
        return true; 
    }else
    if(dealerHand.length === 2 && playerHand.length === 2 && dealerTotal === playerTotal && dealerTotal > 16 && dealerTotal < 21){
        messagetotal.textContent = `It's a push!!`
        return true; 
    }else
    if(playerHand.length === 2 && dealerHand.length === 2 && playerTotal === dealerTotal && playerTotal > 16 && playerTotal < 21){
                    messagetotal.textContent = `It's a push!!`
                    return true; 
    }else
    if(dealerTotal > 21){
        messagetotal.textContent = `Dealer BUST!!! You WIN!!`
        return true;
    }else
    if(playerTotal > 21){
        messagetotal.textContent = `You Busts!!!`
        return true;
    }else
    if(dealerHand.length > 2 && dealerTotal > 16 && dealerTotal < 21 && dealerTotal > playerTotal){
        messagetotal.textContent =`Dealer Wins!!`
        return true;
    }else
    if(playerHand.length > 2 && playerTotal < 21 && playerTotal > dealerTotal){
            messagetotal.textContent =`You Win!!`
            return true;
    }else
    if(playerHand.length > 2 && playerTotal > dealerTotal && playerTotal < 21){
        messagetotal.textContent =`You Win!!`
        return true;
    }else
    if(playerHand.length > 2 && playerTotal > dealerTotal && playerTotal < 21){
            messagetotal.textContent =`You Win!!`
            return true;
    }else
    if(dealerHand.length > 2 && dealerTotal > playerTotal && dealerTotal < 21){
            messagetotal.textContent =`Dealer Wins!!`
            return true;
    }else
    if(dealerHand.length > 2 && dealerTotal === 21 && dealerTotal > playerTotal){
            messagetotal.textContent =`Dealer Wins!!`
            return true;
    }else
    if(playerHand.length > 2 && playerTotal === 21 && playerTotal > dealerTotal){
                messagetotal.textContent =`You Win!!`
                return true;
    }else 
    if(dealerHand.length > 2 && dealerTotal === playerTotal){
        messagetotal.textContent = `It's a Push!!`
        return true;
    }else
    if(playerHand.length > 2 && playerTotal === dealerTotal){
        messagetotal.textContent = `It's a Push!!`
        return true;
    }

}
