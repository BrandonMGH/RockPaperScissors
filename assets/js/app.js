
const rockButton = document.getElementById("rockButton")
const paperButton = document.getElementById("paperButton")
const scissorsButton = document.getElementById("scissorsButton")
const computerOptions = ["Rock", "Paper", "Scissors" ]


let humanTally = 0; 
let computerTally = 0; 
let humanChoice = ""
let computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];

document.getElementById("humanTally").innerHTML = humanTally
document.getElementById("computerTally").innerHTML = computerTally


console.log(computerChoice)



rockButton.onclick = function () {
    console.log(rockButton.value)
    humanChoice = rockButton.value
    compareChoices()
}

paperButton.onclick = function () {
    console.log(paperButton.value)
    humanChoice = paperButton.value
    compareChoices()
}

scissorsButton.onclick = function () {
    console.log(scissorsButton.value)
    humanChoice = scissorsButton.value
    compareChoices()
}

let compareChoices = function () { 
if(humanChoice === computerChoice){
    alert("You win")
    humanTally++;
    document.getElementById("humanTally").innerHTML = humanTally
    // gameReset();
}else {
    alert("you lose")
    computerTally++;
    document.getElementById("computerTally").innerHTML = computerTally
    // gameReset();
}
}

