
const asteroidButton = document.getElementById("asteroidButton")
const cometButton = document.getElementById("cometButton")
const starButton = document.getElementById("starButton")
const computerOptions = ["Asteroid", "Comet", "Star"]

let humanSessionScore = 0
let computerSessionScore = 0
let humanTally = 0;
let computerTally = 0;
let tallyDifference = 0
let humanChoice = ""
let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

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
    if (humanChoice === "Asteroid" && computerChoice === "Star" || humanChoice === "Comet" && computerChoice === "Asteroid" || humanChoice === "Star" && computerChoice === "Comet") {
        humanTally++;
        tallyDifference++;
        document.getElementById("humanMatchScore").innerHTML = humanTally
        document.getElementById("winnerLoserText").innerHTML = "Player Wins Match"
        computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        console.log(computerChoice)
        console.log(tallyDifference)
        iconMove();
    } else if (humanChoice === computerChoice) {
        document.getElementById("winnerLoserText").innerHTML = "Match is a Tie"
        computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        console.log(computerChoice)
        console.log(tallyDifference)
    } else {
        computerTally++;
        tallyDifference--;
        document.getElementById("computerMatchScore").innerHTML = computerTally
        document.getElementById("winnerLoserText").innerHTML = "Computer Wins Match"
        computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        console.log(computerChoice)
        console.log(tallyDifference)
        iconMove();
    }
};

let iconMove = function () {
    if (tallyDifference === -5) {
        document.getElementById("spaceMan").style.left = "40%";
        computerSessionScore++;
        tallyDifference = 0
        document.getElementById("computerSessionScore").innerHTML = computerSessionScore
        document.getElementById("winnerLoserText").innerHTML = "You have been devoured by the Alien"
        setTimeout(() => {
            spaceWalkerReset();
        }, 3000);
    } else if (tallyDifference === -4) {
        document.getElementById("spaceMan").style.left = "32%";
    } else if (tallyDifference === -3) {
        document.getElementById("spaceMan").style.left = "24%";
    } else if (tallyDifference === -2) {
        document.getElementById("spaceMan").style.left = "16%";
    } else if (tallyDifference === -1) {
        document.getElementById("spaceMan").style.left = "8%";
    } else if (tallyDifference === 0) {
        document.getElementById("spaceMan").style.left = "0%";
        document.getElementById("spaceMan").style.right = "0%";
    } else if (tallyDifference === 1) {
        document.getElementById("spaceMan").style.right = "8%";
    } else if (tallyDifference === 2) {
        document.getElementById("spaceMan").style.right = "16%";
    } else if (tallyDifference === 3) {
        document.getElementById("spaceMan").style.right = "24%";
    } else if (tallyDifference === 4) {
        document.getElementById("spaceMan").style.right = "32%";
    } else if (tallyDifference === 5) {
        document.getElementById("spaceMan").style.right = "40%";
        humanSessionScore++;
        tallyDifference = 0
        document.getElementById("humanSessionScore").innerHTML = humanSessionScore
        document.getElementById("winnerLoserText").innerHTML = "You have saved the Space Walker!"
        setTimeout(() => {
            spaceWalkerReset();
        }, 3000);
    }
}

let spaceWalkerReset = function () {
    humanTally = 0
    computerTally = 0   
    document.getElementById("humanMatchScore").innerHTML = humanTally
    document.getElementById("computerMatchScore").innerHTML = computerTally
    document.getElementById("spaceMan").style.left = "0%";
    document.getElementById("spaceMan").style.right = "0%";
}
