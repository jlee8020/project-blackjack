
/*----- constants -----*/
// You can turn these into one line, and then add values in the init
// let cards, totalBets, betOne, ....
let totalBets = []; let betOne; let obj = ''; let dHands = []; let pHands = [];
let sHands =[];
let turn, pTotalScore, dTotalScore;
//render
let dScore, pScore, bank, bets, score, playerBets;
// message;
let pScore1, pScore2, pScore3, pScore4, pScore5, pScore6, pScore7, pScore8;
let dScore1, dScore2, dScore3, dScore4, dScore5, dScore6, dScore7, dScore8;

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
let totalBetEl = document.getElementById('bets');
let pScoreEl = document.getElementById('pTotalScore');


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
document.getElementById('btn-hit').addEventListener('click', playerHit);
document.getElementById('btn-placeBet').addEventListener('click', playerBets);


function placeBets(idx){
    let obj = event.target.textContent;

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
}

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
           render();
           placeBets();
           if (isWinner === false){
               let rndIdx = Math.floor(Math.random() * cards.length);
               let randCards = cards.splice(rndIdx,1);
               dHands.push((`${randCards}`));
               
               rndIdx = Math.floor(Math.random() * cards.length);
               randCardsTwo = cards.splice(rndIdx,1);
               pHands.push((`${randCardsTwo}`));

               for(i=0; i < pHands.length; i++){
                score += cardLookup(pHands[i]);
                pScoreEl.textContent = `Your hand total ${pTotalScore}`;
                render();
            }
           }
        }
            //    vLookup();
               isBlackJack();
            //    checkPlayerWin();


    //     pTotalScore = pScore1 + pScore2 + pScore3 + pScore4 + pScore5  + pScore6 + pScore7 +  pScore8;
    //     dTotalScore = dScore1 + dScore2 + dScore3 + dScore4 + dScore5  + dScore6 + dScore7 +  dScore8;

    //     if(dTotalScore === pTotalScore){
    //     messageTwo.textContent = `Dealer Total ${dTotalScore} ... Your hand total is... ${pTotalScore}
    //     It's a push!!`
        
    //     if(dTotalScore >= pTotalScore){
    //     messageTwo.textContent = `Dealer Total ${dTotalScore} ... Your hand total is... ${pTotalScore}
    //    Sorry Dealer Wins!!`}

    
    //     if(dTotalScore <= pTotalScore){
    //     messageTwo.textContent = `Dealer Total ${dTotalScore} ... Your hand total is... ${pTotalScore}
    //     You Win!!`}
    // ;
    // winnerLogic();
    
    function playerHit(){
       
    }    

        function init(){ 

            bank = 0;
            bet = 0;
            pTotalScore = 0;
            dTotalScore = 0;
            pScore1 = 0;
            dScore1 = 0;
        };
        // function vLookup(){
        //     dValue1 = cardLookup(dHands[0])
        //     dScore1 = dValue1;

        //     dValue2 = cardLookup(dHands[1]);
        //     dScore2 = dValue2;

        //     dValue3 = cardLookup(dHands[2])
        //     dScore3 = dValue3;

        //     dValue4 = cardLookup(dHands[3]);
        //     dScore4 = dValue4;
            
        //     dValue5 = cardLookup(dHands[4])
        //     dScore5 = dValue5;

        //     dValue6 = cardLookup(dHands[5]);
        //     dScore6 = dValue6;

        //     dValue7 = cardLookup(dHands[6]);
        //     dScore7 = dValue7;

        //     dValue8 = cardLookup(dHands[7]);
        //     dScore8 = dValue8;

        //     dValue9 = cardLookup(dHands[8]);
        //     dScore9 = dValue9;
        //     //Player Card Values
        //     pValue1 = cardLookup(pHands[0]);
        //     pScore1 = pValue1
            
        //     pValue2 = cardLookup(pHands[1]);
        //     pScore2 = pValue2;

        //     dValue3 = cardLookup(dHands[2])
        //     dScore3 = dValue3;

        //     dValue4 = cardLookup(dHands[3]);
        //     dScore4 = dValue4;
            
        //     dValue5 = cardLookup(dHands[4])
        //     dScore5 = dValue5;

        //     dValue6 = cardLookup(dHands[5]);
        //     dScore6 = dValue6;

        //     dValue7 = cardLookup(dHands[6]);
        //     dScore7 = dValue7;

        //     dValue8 = cardLookup(dHands[7]);
        //     dScore8 = dValue8;

        //     dValue9 = cardLookup(dHands[8]);
        //     dScore9 = dValue9;};
        
            function render(score){

                pScoreEl.textContent = `${pTotalScore}`;

                dCardOne.classList.remove('outline')
                dCardOne.classList.add('back-red')

                pCardOne.classList.remove('outline')
                pCardOne.classList.add(`${pHands[0]}`)

                dCardTwo.classList.remove('outline')
                dCardTwo.classList.add(`${dHands[0]}`)

                pCardTwo.classList.remove('outline')
                pCardTwo.classList.add(`${pHands[1]}`)
                
                if(cards.length === 2){
                dCardOne.classList.remove('back-red');
                dCardOne.classList.add(`${dHands[1]}`);}
                
            
                // dCardOne.classList.remove('outline')
                // dCardOne.classList.replace('outline',`${dHands[1]}`);
                
                    dCardThree.classList.remove('outline');
                    dCardThree.classList.add(`${dHands[2]}`);
            
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

        function isBlackJack(){

        if(pTotalScore === 21 && pTotalScore < 21){
        messageTwo.textContent = `Dealer has BlackJack!`}
        if(pTotalScore === 21 && pTotalScore < 21){
        messageTwo.textContent = `You Win! BlackJack!`}
        if(dHands.Length === 2 && dScore1 === 11){
        messageTwo.textContent = `Insurance Anyone?`}
        if(pTotalScore === pTotalScore){
            `Its a push!`
        }};
        
        function hit(){
            if(pTotalScore < 21){

                

            }
        }
    function winnerLogic(){
        pTotalScore = pScore1 + pScore2 + pScore3 + pScore4 + pScore5  + pScore6 + pScore7 +  pScore8;
        dTotalScore = dScore1 + dScore2 + dScore3 + dScore4 + dScore5  + dScore6 + dScore7 +  dScore8;

        if(dTotalScore === pTotalScore){
        messageTwo.textContent = `Dealer Total ${dTotalScore} ... Your hand total is... ${pTotalScore}
        It's a push!!`
        
        if(dTotalScore >= pTotalScore){
        messageTwo.textContent = `Dealer Total ${dTotalScore} ... Your hand total is... ${pTotalScore}
       Sorry Dealer Wins!!`}

    
        if(dTotalScore <= pTotalScore){
        messageTwo.textContent = `Dealer Total ${dTotalScore} ... Your hand total is... ${pTotalScore}
        You Win!!`}
    };};

    function checkPlayerWin(){

        

    

    }

   function placeBets(){
    var sumBets = 0;
    for (var i = 0; i < totalBets.length; i++) {
        sumBets += totalBets[i]
        return  sumBets;
      }
      totalBetEl.textContent = `${sumBets}`;

//    }
// function shuffle()
//     {
//         // for 2 turns
//         // switch the values of two random cards
//         for (var i = 0; i < 2; i++)
//         {
//             var location1 = Math.floor((Math.random() * cards.length));
//             var location2 = Math.floor((Math.random() * cards.length));
//             var tmp = cards[location1];

//             cards[location1] = cards[location2];
//             cards[location2] = tmp;
//         }
//     }
//   