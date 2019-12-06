
const asteroidButton = document.getElementById("asteroidButton")
const cometButton = document.getElementById("cometButton")
const starButton = document.getElementById("starButton")
const computerOptions = ["Asteroid", "Comet", "Star" ]

let humanSessionScore = 0
let computerSessionScore = 0
let humanTally = 0; 
let computerTally = 0; 
let tallyDifference = 0
let humanChoice = ""
let computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];

document.getElementById("humanSessionScore").innerHTML = humanSessionScore 
document.getElementById("computerSessionScore").innerHTML = computerSessionScore
document.getElementById("humanMatchScore").innerHTML = humanTally
document.getElementById("computerMatchScore").innerHTML = computerTally


console.log(computerChoice)



asteroidButton.onclick = function () {
    console.log(asteroidButton.value)
    humanChoice = asteroidButton.value
    compareChoices()
}

cometButton.onclick = function () {
    console.log(cometButton.value)
    humanChoice = cometButton.value
    compareChoices()
}

starButton.onclick = function () {
    console.log(starButton.value)
    humanChoice = starButton.value
    compareChoices()
}

let compareChoices = function () { 
if(humanChoice === "Asteroid"  && computerChoice === "Star" || humanChoice === "Comet" && computerChoice === "Asteroid" || humanChoice === "Star" && computerChoice === "Comet"){
    humanTally++;
    tallyDifference ++; 
    document.getElementById("humanMatchScore").innerHTML = humanTally
    document.getElementById("winnerLoserText").innerHTML = "Player Wins Match"
    computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    console.log(computerChoice)
    console.log(tallyDifference)
    iconMove(); 
}else if (humanChoice === computerChoice){
    document.getElementById("winnerLoserText").innerHTML = "Match is a tie"
    computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    console.log(computerChoice)
    console.log(tallyDifference)
} else {
    computerTally++;
    tallyDifference--;
    document.getElementById("computerMatchScore").innerHTML = computerTally
    document.getElementById("winnerLoserText").innerHTML = "Computer Wins Match"
    computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    console.log(computerChoice)
    console.log(tallyDifference)
    iconMove();
}
};

let iconMove = function (){
    if(tallyDifference === -5){
        document.getElementById("spaceMan").style.left = "50%";
        computerSessionScore++; 
        document.getElementById("computerSessionScore").innerHTML = computerSessionScore
    }else if (tallyDifference === -4){
        document.getElementById("spaceMan").style.left = "40%";
    }else if (tallyDifference === -3){
        document.getElementById("spaceMan").style.left = "30%";
    }else if (tallyDifference === -2){
        document.getElementById("spaceMan").style.left = "20%";
    }else if (tallyDifference === -1){
        document.getElementById("spaceMan").style.left = "10%";
    }else if (tallyDifference === 0){
        document.getElementById("spaceMan").style.left = "0%";
        document.getElementById("spaceMan").style.right = "0%";
    }else if (tallyDifference === 1){
        document.getElementById("spaceMan").style.right = "10%";
    }else if (tallyDifference === 2){
        document.getElementById("spaceMan").style.right = "20%";
    }else if (tallyDifference === 3){
        document.getElementById("spaceMan").style.right = "30%";
    }else if (tallyDifference === 4){
        document.getElementById("spaceMan").style.right = "40%";
    }else if (tallyDifference === 5){
        document.getElementById("spaceMan").style.right = "50%";
        humanSessionScore++; 
        document.getElementById("humanSessionScore").innerHTML = humanSessionScore
    }
}

