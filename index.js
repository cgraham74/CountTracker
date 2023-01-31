let bonusPoints = 0;
let countEl = document.getElementById("count-el");
function increment(){
    bonusPoints++;
    countEl.innerText = bonusPoints;

}

function decrement(){
    bonusPoints--;
    countEl.innerText = bonusPoints;
   
}

function save(){
    console.log(bonusPoints);
}