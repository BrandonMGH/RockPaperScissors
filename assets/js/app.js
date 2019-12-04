
const rockButton = document.getElementById("rockButton")
const paperButton = document.getElementById("paperButton")
const scissorsButton = document.getElementById("scissorsButton")
const computerOptions = ["Rock", "Paper", "Scissors" ]


let humanTally = 0; 
let computerTally = 0; 
let tallyDifference = 0
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
if(humanChoice === "Rock"  && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Paper"){
    alert("You win")
    humanTally++;
    tallyDifference ++; 
    document.getElementById("humanTally").innerHTML = humanTally
    computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    console.log(computerChoice)
    console.log(tallyDifference)
    iconMove(); 
}else if (humanChoice === computerChoice){
    alert("You both tied")
    computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    console.log(computerChoice)
    console.log(tallyDifference)
} else {
    alert("you lose")
    computerTally++;
    tallyDifference--;
    document.getElementById("computerTally").innerHTML = computerTally
    computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    console.log(computerChoice)
    console.log(tallyDifference)
    iconMove();
}
};

let iconMove = function (){
    if(tallyDifference === -5){
        document.getElementById("test").style.marginRight = "75%";
    }else if (tallyDifference === -4){
        document.getElementById("test").style.marginRight = "60%";
    }else if (tallyDifference === -3){
        document.getElementById("test").style.marginRight = "45%";
    }else if (tallyDifference === -2){
        document.getElementById("test").style.marginRight = "30%";
    }else if (tallyDifference === -1){
        document.getElementById("test").style.marginRight = "15%";
    }else if (tallyDifference === -0){
        document.getElementById("test").style.marginRight = "0%";
        document.getElementById("test").style.marginLeft = "0%";
    }else if (tallyDifference === 1){
        document.getElementById("test").style.marginLeft = "15%";
    }else if (tallyDifference === 2){
        document.getElementById("test").style.marginLeft = "30%";
    }else if (tallyDifference === 3){
        document.getElementById("test").style.marginLeft = "45%";
    }else if (tallyDifference === 4){
        document.getElementById("test").style.marginLeft = "60%";
    }else if (tallyDifference === 5){
        document.getElementById("test").style.marginRight = "75%";
    }
}
console.log(tallyDifference)