import randomInteger from "random-int";
import PromptSync from "prompt-sync";
const choice = ["Rock", "Paper", "Scissor"];

// Display Menu
const userPrompt = " 0. Rock \n 1. Paper \n 2. Scissor \n "; 


//Outcome
var outCome = "Ready to Play";
while(true){
//Computer Choice Randomly
const computerChoice = randomInteger(0, 2);
const computerchoiceName = choice[computerChoice];

// User Choice
const prompt = PromptSync();
const userInput = prompt(userPrompt);
const userChoice = choice[userInput];

if(computerchoiceName === userChoice)
{
    outCome = "Draw";
}
else if(computerchoiceName === "Rock" && userChoice === "Paper")
{
    outCome = "Player Wins";
}
else if(computerchoiceName === "Rock" && userChoice === "Scissor")
{
    outCome = "Computer Wins";
}
else if(computerchoiceName === "Paper" && userChoice === "Rock")
{
    outCome = "Computer Wins";
}
else if(computerchoiceName === "Paper" && userChoice === "Scissor")
{
    outCome = "Player Wins";
}
else if(computerchoiceName === "Scissor" && userChoice === "Rock")
{
    outCome = "Player Wins";
}
else if(computerchoiceName === "Scissor" && userChoice === "Paper")
{
    outCome = "Computer Wins";
}
else{
    outCome = "Invalid entry. Please try Again! .. ";
}
// Console the All Variables
console.log("\t Computer Chooses: " + computerchoiceName);
console.log("\t User Chooses: " + userChoice);
console.log("\t Decision: " + outCome);
}