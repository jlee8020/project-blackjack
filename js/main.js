
/*----- constants -----*/
// You can turn these into one line, and then add values in the init
// let cards, totalBets, betOne, ....
let cards 
let totalBets = [];
let betOne;
let obj = '';
let bank
let dHands = [];
let pHands = [];
let player;
let turn;
let sHands =[];
let card1Remove = "temp";




/*----- app's state (variables) ----*/
let winner; 

/*----- cached element references -----*/
let startGame = document.getElementById('start-game');
let dCardOne = document.getElementById('Downcard');
let dCardTwo = document.getElementById('Upcard');
let pCardOne = document.getElementById('cardOne');
let pCardTwo = document.getElementById('cardTwo');
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
document.getElementById('start-game').addEventListener('click', init);

// document.getElementById('btn-allin').addEventListener('click', placeBets);
// document.getElementById('btn-min').addEventListener('click', placeBets);

/*----- functions -----*/
// init();
// renderDealer();
// renderPlayer();
// function startGame (){
// }

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
        console.log(dHands)
        let rndIdx = Math.floor(Math.random() * cards.length);
        let randCards = cards.splice(rndIdx, 4);
        
        pHands.push(randCards[1],randCards[2]);
        dHands.push(randCards[0],randCards[3]);

        dCardOne.classList.remove('outline')
        dCardOne.classList.add('back-red')

        dCardTwo.classList.remove('outline')
        dCardTwo.classList.add(dHands[0])

        pCardOne.classList.remove('outline')
        pCardOne.classList.add(pHands[0])
        
        pCardTwo.classList.remove('outline')
        pCardTwo.classList.add(pHands[1])
    };
    // render();
    

    // dealCards();
    // shuffle();

function init(){
    // Can add values to variable declared above
    console.log('in init')
    cards =["dA","cA","sA","dQ","dK","dJ","d10","hQ","hK","hJ","h10","cQ","cK","cJ","c10","sQ","sK","sJ","s10","d09","h09","c09","s09","d08","h08","c08","s08","d07","h07","c07","s07",
    "d06","h06","c06","s06","d05","h05","hA","c05","s05","d04","h04","c04","s04","d03","h03","c03","s03","d02","h02","c02","s03",];
    bank = 0
    render();
};

function getPlayerCards(){
    

}

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
  // assigning cards to display on the screen
// function renderDealer(dHands){
// d1 = document.getElementById('Upcard').addEventListener('click',dHands);
// d2 = document.getElementById('Downcard').addEventListener('click',dHands);

// document.getElementsByClassName("card back-red large shadow",dHands[0]);
// document.getElementsByClassName("card back-red large shadow",dHands[1]);


    // dealerCardOne = document.getElementsByClassName("card back-red large shadow"),[0];
    // dealerCardTwo = document.getElementsByClassName("card back-red large shadow"),[1];
function render(){
    console.log('render', dHands.length)
    // dCardOne.classList.remove('outline')
    // dCardOne.classList.add('back-red')

    // dCardTwo.classList.remove('outline')
    // dCardTwo.classList.add('back-red')


    if (pHands.length === 1) {
        document.getElementById('cardOne').classlist.remove("card large outline");
        document.getElementById('cardOne').classlist.add("h08");
        // pCardOne.classList.remove('card large outline');
        // pCardOne.classList.add(`${pHands[0]}`);

        // cardOne.classList.remove('card large outline');
        // cardOne.classList.add(`${pHands[0]}`);

    }};
    // document.getElementById('Downcard').classList.add("card back-red large shadow");
    // document.getElementById('Upcard').classList.remove("card d10 large");
    // document.getElementById('Upcard').classList.add(`${dHands[1]}`);

    // pCardOne = document.getElementById('cardOne').classList.remove("card large outline");
    // document.getElementById('cardOne').classList.add(`${pHands[1]}`);
    // document.getElementById('cardTwo').classList.add(`${pHands[0]}`);

    // pCardOne.classList.add('back-blue');
    // deck1El.classList.remove('outline');

    // document.getElementById("shadow").classList.add
  

function addCards(){
    

};

