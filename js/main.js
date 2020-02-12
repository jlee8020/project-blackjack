
/*----- constants -----*/
// You can turn these into one line, and then add values in the init
// let cards, totalBets, betOne, ....
let cards; let totalBets = []; let betOne; let obj = ''; let dHands = []; let pHands = [];let player;
let sHands =[];
let turn,  playerPos, pTotalScore, dTotalScore;
//render
let dScore, pScore, bank, bets;
// message;

//for Evaluating values

isWinner = false; 

cards =["dA","cA","sA","dQ","dK","dJ","d10","hQ","hK","hJ","h10","cQ","cK","cJ","c10","sQ","sK","sJ","s10","d09","h09","c09","s09","d08","h08","c08","s08","d07","h07","c07","s07",
    "d06","h06","c06","s06","d05","h05","hA","c05","s05","d04","h04","c04","s04","d03","h03","c03","s03","d02","h02","c02","s03",];



/*----- app's state (variables) ----*/
let winner; 

/*----- cached element references -----*/
let startGame = document.getElementById('start-game');
let dCardOne = document.getElementById('Downcard');
let dCardTwo = document.getElementById('Upcard');
let dCardThree = document.getElementById('dcard-three');
let dCardFour = document.getElementById('dcard-four');
let dCardFive = document.getElementById('dcard-five');
let dCardSix = document.getElementById('dcard-six');


let pCardOne = document.getElementById('cardOne');
let pCardTwo = document.getElementById('cardTwo');
let pCardThree = document.getElementById('pcard-three');
let pCardFour = document.getElementById('pcard-four');
let pCardFive = document.getElementById('pcard-five');
let pCardSix = document.getElementById('pcard-six');

let message = document.getElementById('message');
let gameButton = document.getElementById('btn-deal');
let messageTwo = document.getElementById('message2');

/*----- event listeners -----*/
// document.querySelector('bet-amounts').addEventListener('click', placeBets);
document.getElementById('btn-one').addEventListener('click', placeBets);
document.getElementById('btn-five').addEventListener('click', placeBets);
document.getElementById('btn-twenty-five').addEventListener('click', placeBets);
document.getElementById('btn-fifty').addEventListener('click', placeBets);
document.getElementById('btn-one-hundred').addEventListener('click', placeBets);
document.getElementById('btn-five-hundred').addEventListener('click', placeBets);
document.getElementById('btn-one-thousand').addEventListener('click', placeBets);
document.getElementById('btn-deal').addEventListener('click', dealCards);
// document.getElementById('start-game').addEventListener('click', dealCards);

// document.getElementById('btn-allin').addEventListener('click', placeBets);
// document.getElementById('btn-min').addEventListener('click', placeBets);


function placeBets(idx){
    let obj = event.target.textContent;
    // message.textContent = "Place Your Bet!";

    if(obj === '$1'){
        obj = 1;
        totalBets.push(obj);

    }
    if(obj === '$5'){
        obj = 5;
        totalBets.push(obj);
    }
    if(obj === '$25'){
        obj = 25;
        totalBets.push(obj);
    }
    if(obj === '$50'){
        obj = 50;
        totalBets.push(obj);
    }
    if(obj === '$100'){
        obj = 100;
        totalBets.push(obj);
    }
    if(obj === '$500'){
        obj = 500;
        totalBets.push(obj);
    }
    if(obj === '$1000'){
        obj = 1000;
        totalBets.push(obj);
    }
};
let sumTotalBets = totalBets.reduce(function(acc, val) { return acc + val; }, 0)

function cardLookup(card){

    let cardValues;

    if (card === "dA" || card === "hA" || card ==="cA" || card === "sA"){
        cardValues = 11;
    }
    if (card === "dQ" || card === "hQ" || card === "cQ" || card === "sQ" ||
        card === "dK" || card === "hK" || card === "cK" || card === "sK" ||
        card === "dJ" || card === "hJ" || card === "cJ" || card === "sJ" ||
        card === "d10" || card === "h10" || card === "c10" || card === "s10"){
        cardValues = 10;
    }
    if (card === "d9" || card === "h9" || card ==="c9" || card === "s9"){
        cardValues = 9;
    }
    if (card === "d8" || card === "h8" || card ==="c8" || card === "s8"){
        cardValues = 8;
    }
    if (card === "d7" || card === "h7" || card ==="c7" || card === "s7"){
        cardValues = 7;
    }
    if (card === "d6" || card === "h6" || card ==="c6" || card === "s6"){
        cardValues = 6;
    }
    if (card === "d5" || card === "h5" || card ==="c5" || card === "s5"){
        cardValues = 5;
    }
    if (card === "d4" || card === "h4" || card ==="c4" || card === "s4"){
        cardValues = 4;
    }
    if (card === "d3" || card === "h3" || card ==="c3" || card === "s3"){
        cardValues = 3;
    }
    if (card === "d2" || card === "h2" || card ==="c2" || card === "s2"){
        cardValues = 2;
    }    
    return cardValues;   
    }

    function dealCards(){
    if (isWinner === false){
        for (i=1; i<=1; i++){
        gameButton.textContent = 'Deal Cards';
        let rndIdx = Math.floor(Math.random() * cards.length);
        let randCards = cards.splice(rndIdx,1);
        dHands.push((`${randCards}`));

        rndIdx = Math.floor(Math.random() * cards.length);
        randCardsTwo = cards.splice(rndIdx,1);
        pHands.push((`${randCardsTwo}`));

        messageTwo.textContent = `Dealer has BlackJack!`}

        dValue1 = cardLookup(dHands[0])
            dScore1 = dValue1;

            pValue1 = cardLookup(pHands[0]);
            pScore1 = pValue1

            dValue2 = cardLookup(dHands[1]);
            dScore2 = dValue2;

            pValue2 = cardLookup(pHands[0]);
            pScore2 = pValue2;

        if(pTotalScore === 21 && pTotalScore < 21){
                messageTwo.textContent = `Dealer has BlackJack!`}
        if(pTotalScore === 21 && pTotalScore < 21){
                messageTwo.textContent = `You Win! BlackJack!`}
        if(dScore1 === 11){
                messageTwo.textContent = `Insurance Anyone?`}
    

        dCardOne.classList.remove('outline')
        dCardOne.classList.add('back-red')

        dCardTwo.classList.remove('outline')
        dCardTwo.classList.add(`${dHands[0]}`)

        pCardOne.classList.remove('outline')
        pCardOne.classList.add(`${pHands[0]}`)
        
        pCardTwo.classList.remove('outline')
        pCardTwo.classList.add(`${pHands[1]}`)

        // continuePlay//
        // dCardOne.classList.remove('outline')
        dCardOne.classList.replace('outline',`${dHands[1]}`);
        
        dCardThree.classList.remove('outline');
        dCardThree.classList.add(`${dHands[2]}`);
        // dCardOne.classList.add(`${dHands[1]}`)
    
            dCardFour.classList.remove('outline');
            dCardFour.classList.add(`${dHands[3]}`);
    
            dCardFive.classList.remove('outline');
            dCardFive.classList.add(`${dHands[4]}`);
            
            dCardSix.classList.remove('outline');
            dCardSix.classList.add(`${dHands[5]}`);
            
            pCardThree.classList.remove('outline');
            pCardThree.classList.add(`${pHands[2]}`);
    
            pCardFour.classList.remove('outline');
            pCardFour.classList.add(`${pHands[3]}`);
    
            pCardFive.classList.remove('outline');
            pCardFive.classList.add(`${pHands[4]}`);
            
            pCardSix.classList.remove('outline');
            pCardSix.classList.add(`${pHands[5]}`);
        };
        
    
    // if(pHands.length === 1 && dHands.length === 1){
    // return dealCards;};
    }
    
    

    // dealCards();
    // shuffle();

function init(){
    // Can add values to variable declared above
    
    bank = 0;
    render();
    placeBets();
    playerPos = 0;
    pTotalScore = 0;
    dTotalScore = 0;
    pScore1 = 0;
    dScore1 = 0;
};
        

function addCards(){
let dCard1;let dCard2; let pCard1;let pCard2;

dCard1 = dHands.shift();
dValue1 = cardLookup(dCard1);
dcard1Removed1 = dCard1;

pCard1 = pHands.shift();
pValue1 = cardLookup(pCard1);
pcard1Removed2 = pCard1;

dCard2 = dHands.shift();
dValue2 = cardLookup(dCard2);
dcard2Removed3 = dCard2;

pCard2 = pHands.shift();
pValue2 = cardLookup(pCard2);
pcard2Removed4 = pCard2;
};

function isBlackJack(){
let dValue1; let dValue2; let pValue1; let pValue2;

if(dValue1 + dValue2 === 21 && pValue1 + pValue2 < 21){
        message.textContent = `Dealer has BlackJack!`}
        console.log(dValue1);
        console.log(message);
if(pValue1 + pValue2 === 21 && dValue1 + dValue2 < 21){
        message.textContent = `You Win! BlackJack!`}
        console.log(message);
if(dValue1 === 11){
            message.textContent = `Insurance Anyone?`}
else{
  continuePlay();
}

};


function shuffle()
    {
        // for 2 turns
        // switch the values of two random cards
        for (var i = 0; i < 2; i++)
        {
            var location1 = Math.floor((Math.random() * cards.length));
            var location2 = Math.floor((Math.random() * cards.length));
            var tmp = cards[location1];

            cards[location1] = cards[location2];
            cards[location2] = tmp;
        }
    }
  ;
function render(){


    };
