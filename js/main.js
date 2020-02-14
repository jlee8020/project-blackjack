// Variable declarations
let deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
let playerHand = [];
let dealerHand = [];
let money = 1000;
let bet = 0;
let playerTotal = 0;
let dealerTotal = 0;
let pickCard;
// Cached element references
let message = document.getElementById('message');
let message1 = document.getElementById('message1');
let message2 = document.getElementById('message2');
let bet1 = document.getElementById('betOne');
let bet5 = document.getElementById('betFive');
let bet25 = document.getElementById('betTwentyFive');
let bet50 = document.getElementById('betFifty');
let bet100 = document.getElementById('betHundred');
let betAmount = document.getElementById('betAmount');
let clearBet = document.getElementById('clearBet');
let dealBtn = document.getElementById('dealBtn');
let hitBtn = document.getElementById('hitBtn');
let doubleBtn = document.getElementById('doubleBtn');
let standBtn = document.getElementById('standBtn');
let splitBtn = document.getElementById('splitBtn');
let playerCard2 = document.getElementById('playerCard2');
let playerCard3 = document.getElementById('playerCard3');
let playerCard4 = document.getElementById('playerCard4');
let playerCard5 = document.getElementById('playerCard5');
let playerCard6 = document.getElementById('playerCard6');
let dealerCard0 = document.getElementById('back-red');
let flipDealer = document.getElementById('flipDealer');
let messagetotal = document.getElementById('messagetotal')
// Event listeners

dealBtn.addEventListener('click', dealHand);
hitBtn.addEventListener('click', handleHitBtn);

flipDealer.addEventListener('click', flipDealerCard)
standBtn.addEventListener('click', handleStandBtn);



// Initialization resets deck and both hands
function init() {
    deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
    playerHand = [];
    dealerHand = [];
    render();
}


// Shows bet buttons when cards are cleared
function showBets() {
    bet1.classList.remove('hidden');
    bet5.classList.remove('hidden');
    bet25.classList.remove('hidden');
    bet50.classList.remove('hidden');
    bet100.classList.remove('hidden');
    clearBet.classList.remove('hidden');
}
function showHitDoubleStay(){

    hitBtn.classList.remove('hidden');
    standBtn.classList.remove('hidden');
}
function hideButtons(){
    dealBtn.classList.add('hidden');
    hitBtn.classList.add('hidden');
    standBtn.classList.add('hidden');
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
    
    hideButtons();
};

    function handleStandBtn(){

        if(dealerHand.length === 2 && dealerTotal < 17){
            dealerCard2.classList.remove('hidden');
            document.getElementById(`dealerCard2`).classList.add(`${dealerHand[i]}`)
            pickCard = drawCard();
            dealerHand.push(`${pickCard}`);
            checkForWin();
            render();
        }
        else if(dealerHand.length === 3 && dealerTotal < 17){
            dealerCard3.classList.remove('hidden');
            pickCard = drawCard();
            dealerHand.push(`${pickCard}`);
            checkForWin();
            render();
        }
        else if(dealerHand.length === 4 && dealerTotal < 17){
            dealerCard4.classList.remove('hidden');
            pickCard = drawCard();
            dealerHand.push(`${pickCard}`);
            checkForWin();
            render();
        }else if(dealerHand.length === 5 && dealerTotal < 17){
            dealerCard5.classList.remove('hidden');
            pickCard = drawCard();
            dealerHand.push(`${pickCard}`);
            checkForWin();
            render();
        }else if(dealerHand.length === 6){
            dealerCard6.classList.remove('hidden');
            pickCard = drawCard();
            dealerHand.push(`${pickCard}`);
            checkForWin();
            render();
            }
    }

   
    function handleHitBtn(evt){
        
        if(playerHand.length === 2){
        playerCard2.classList.remove('hidden');
        pickCard = drawCard();
        playerHand.push(`${pickCard}`);
        checkForWin();
        render();

        }else if(playerHand.length === 3){
        playerCard3.classList.remove('hidden');
        pickCard = drawCard();
        playerHand.push(`${pickCard}`);
        checkForWin();
        render();
        }else if(playerHand.length === 4){
            playerCard4.classList.remove('hidden');
            pickCard = drawCard();
            playerHand.push(`${pickCard}`);
            checkForWin();
            render();
        }else if(playerHand.length === 5){
        playerCard5.classList.remove('hidden');
        pickCard = drawCard();
        playerHand.push(`${pickCard}`);
        checkForWin();
        render();
        }else if(playerHand.length === 6){
            playerCard6.classList.remove('hidden');
            pickCard = drawCard();
            playerHand.push(`${pickCard}`);
            checkForWin();
            render();
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
    showBets();
    for (i=0; i<= playerHand.length; i++) {
        let removeCard = playerHand.splice(0, 1);
        document.getElementById(`playerCard${i}`).classList.remove(`${removeCard}`);
        
    }
    if(dealerHand.length === 2 && playerHand.length === 2 )
    render();
}

// Increase bet amount by value shown on each button
function addBet(evt) {
    if (evt.target.id === 'betOne' && money >= 1) {
        bet += 1;
        money -= 1;
    }
    if (evt.target.id === 'betFive' && money >= 5) {
        bet += 5;
        money -= 5;
    }
    if (evt.target.id === 'betTwentyFive' && money >= 25) {
        bet += 25;
        money -= 25;
    }
    if (evt.target.id === 'betFifty' && money >= 50) {
        bet += 50;
        money -= 50;
    }
    if (evt.target.id === 'betHundred' && money >= 100) {
        bet += 100;
        money -= 100;
    }
    if (evt.target.id === 'clearBet') {
        money += bet;
        bet = 0;
    }
    render()
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
    if (card === "dA" || card === "hA" || card ==="cA" || card === "sA"){
        cardValue = 11;
    }
    if (card === "dA" && playerTotal > 10 || card === "hA" && playerTotal > 10|| 
    card ==="cA" && playerTotal > 10 || card === "sA" && playerTotal > 10){
            cardValue = 1;
    }
    if (card === "dA" && dealerTotal > 10 || card === "hA" && dealerTotal > 10|| 
    card ==="cA" && dealerTotal > 10 || card === "sA" && dealerTotal > 10){
            cardValue = 1;
    }
    if (card === "dA" || card === "hA" || card ==="cA" || card === "sA"){
            cardValue = 11;
    }
    if (card === "dQ" || card === "hQ" || card === "cQ" || card === "sQ" ||
        card === "dK" || card === "hK" || card === "cK" || card === "sK" ||
        card === "dJ" || card === "hJ" || card === "cJ" || card === "sJ" ||
        card === "d10" || card === "h10" || card === "c10" || card === "s10"){
        cardValue = 10;
    }
    if (card === "d09" || card === "h09" || card ==="c09" || card === "s09"){
        cardValue = 9;
    }
    if (card === "d08" || card === "h08" || card ==="c08" || card === "s08"){
        cardValue = 8;
    }
    if (card === "d07" || card === "h07" || card ==="c07" || card === "s07"){
        cardValue = 7;
    }
    if (card === "d06" || card === "h06" || card ==="c06" || card === "s06"){
        cardValue = 6;
    }
    if (card === "d05" || card === "h05" || card ==="c05" || card === "s05"){
        cardValue = 5;
    }
    if (card === "d04" || card === "h04" || card ==="c04" || card === "s04"){
        cardValue = 4;
    }
    if (card === "d03" || card === "h03" || card ==="c03" || card === "s03"){
        cardValue = 3;
    }
    if (card === "d02" || card === "h02" || card ==="c02" || card === "s02"){
        cardValue = 2;
    }    
    return cardValue;
}

// Adjusts all CSS for cards to be rendered
function render() {
    // betAmount.textContent = `$ ${bet}`;
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
        hideButtons();
        if(dealerHand.Length === 2 && playerHand === 2);
            document.getElementById('dealerCard0').classList.remove('back-red');
            document.getElementById(`dealerCard0`).classList.add(`${dealerHand[0]}`)
            checkForWin();
            showHitDoubleStay();
            hideFlippedDealer();
    }
    function hideFlippedDealer(){
         flipDealer.classList.add('hidden');
        }

    function checkForWin(){
        getTotals();
        if (dealerTotal === 21 && playerHand.Length === 2){
            messagetotal.textContent = `You have BlackJack!`
        }
        if (playerTotal === 21 && dealerHand.length === 2){
            messagetotal.textContent = `Dealer has BlackJack!`
        }
        if (dealerHand.Length === 2 && playerTotal === 21 && dealerTotal === 21){
            messagetotal.textContent = `It's a push!`
        }
        //after flip: if dealer > 17 && player player options show
        if (dealerTotal > 17){
            // messagetotal.textContent = `Choose your options: HIT STAND OR DOUBLE`
        }
        if(dealerTotal < 17){
            // messagetotal.textContent = `Choose your options: HIT STAND OR DOUBLE`
        }
        if(dealerHand.Length > 2 && playerTotal === dealerTotal && dealerTotal === 17){
            messagetotal.textContent = `It's a push!`
        }
        if(dealerTotal > 21){
         messagetotal.textContent = `Dealer Bust!!`
        }
        if(playerTotal > 21){
            messagetotal.textContent = `You Bust!!`
        }
    }
    