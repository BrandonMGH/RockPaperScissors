
const rockButton = document.getElementById("rockButton")
// let paperButton = document.getElementById("paperButton")
// let scissorsButton = document.getElementById("scissorsButton")
const computerOptions = ["Rock", "Paper", "Scissors" ]

let humanChoice = ""
let computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];

console.log(computerChoice)

rockButton.onclick = function () {
    console.log(rockButton.value)
    humanChoice = rockButton.value
}

paperButton.onclick = function () {
    console.log(paperButton.value)
    humanChoice = rockButton.value
}

scissorsButton.onclick = function () {
    console.log(scissorsButton.value)
    humanChoice = rockButton.value
}


if(humanChoice === computerChoice){
    console.log("You win")
}else {
    console.log("you lose")
}
