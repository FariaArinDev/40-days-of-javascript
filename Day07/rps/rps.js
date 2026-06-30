function rockPaperScossiorGame(){
console.log("Lets start")
const userChoisePrompt = prompt("Enter Rock, Paper or Scissiors")
let userChoice         = userChoisePrompt? userChoisePrompt.toLowerCase(): "rock"
let computerChoice     = ""
console.log(computerChoice)
const randomNumber     = Math.floor(Math.random() * 3) + 1
console.log(randomNumber)
switch(randomNumber){
    case 1 : computerChoice = "rock"; break
    case 2 : computerChoice = "paper"; break
    case 3 : computerChoice = "scissors"; break
}
console.log("user selected", userChoice);
console.log("computer selected", computerChoice)
if ((userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")){
    console.log( "you the user win, YAAY!")
} else if( userChoice === computerChoice){
    console.log("The game is draw")

} else if ((computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper"))
    {
    console.log( "you the Computer win, YAAY!")
} else{
 console.log("Please enter a valid input")
}
const playAgainPrompt = prompt ("Do you want to play again? (yes/no)");
const playAgain = playAgainPrompt? playAgainPrompt.toLowerCase() : "no";
if (playAgain === "yes"){
    rockPaperScossiorGame()
} else{
    console.log("Thanks for playing")
}
}
rockPaperScossiorGame();