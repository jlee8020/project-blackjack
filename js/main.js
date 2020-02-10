/*----- constants -----*/
let cards =["dA","hA","cA","sA","dQ","dK","dJ","d10","hQ","hK","hJ","h10","cQ","cK","cJ","c10","sQ","sK","sJ","s10","d09","h09","c09","s09","d08","h08","c08","s08","d07","h07","c07","s07",
"d06","h06","c06","s06","d05","h05","c05","s05","d04","h04","c04","s04","d03","h03","c03","s03","d02","h02","c02","s03",];

let totalBets = [];
let betOne;
let obj = '';
let bank = 0;
let dHands = [];
let player;
let turn;

/*----- app's state (variables) ----*/
let winner; 

/*----- cached element references -----*/


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

// document.getElementById('btn-allin').addEventListener('click', placeBets);
// document.getElementById('btn-min').addEventListener('click', placeBets);

/*----- functions -----*/
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
};
let sumTotalBets = totalBets.reduce(function(acc, val) { return acc + val; }, 0)
function render(){
    
}

function cardLookup(card){
    if (card === "dA" || card === "hA" || card ==="cA" || card === "sA"){
        return 11;
    }
    if (card === "dQ" || card === "hQ" || card === "cQ" || card === "sQ" ||
        card === "dK" || card === "hK" || card === "cK" || card === "sK" ||
        card === "dJ" || card === "hJ" || card === "cJ" || card === "sJ" ||
        card === "d10" || card === "h10" || card === "c10" || card === "s10"){
        return 10;
    }
    if (card === "d9" || card === "h9" || card ==="c9" || card === "s9"){
        return 9;
    }
    if (card === "d8" || card === "h8" || card ==="c8" || card === "s8"){
        return 8;
    }
    if (card === "d7" || card === "h7" || card ==="c7" || card === "s7"){
        return 7;
    }
    if (card === "d6" || card === "h6" || card ==="c6" || card === "s6"){
        return 6;
    }
    if (card === "d5" || card === "h5" || card ==="c5" || card === "s5"){
        return 5;
    }
    if (card === "d4" || card === "h4" || card ==="c4" || card === "s4"){
        return 4;
    }
    if (card === "d3" || card === "h3" || card ==="c3" || card === "s3"){
        return 3;
    }
    if (card === "d2" || card === "h2" || card ==="c2" || card === "s2"){
        return 2;
    }       
    }
    function dealCards(){
        let dHands =[];
        let rndIdx = Math.floor(Math.random() * cards.length);
        let randCards = cards.splice(rndIdx, 1);
        dHands.push(randCards[0]);
        dHands[0] === turn;
        //  console.log(dHands);
    };
    dealCards();
    
    

function init(){}



      



