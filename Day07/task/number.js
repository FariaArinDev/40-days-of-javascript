function startSecretNumberGame() {
    const minNumber = 1;
    const maxNumber = 10;
    let userInput = Number(prompt("enter the number between 1-10"));
    while (userInput < minNumber || userInput > maxNumber) {
        userInput = Number(prompt("Invalid input. plesae enter a valid number between 1-10"));
    }

    let randomNumber = Math.floor(Math.random() * maxNumber) + 1;

    let numberOfAttemps = 1
    while (userInput !== randomNumber) {
        numberOfAttemps++
        if (userInput > randomNumber) {
            userInput = Number(prompt("Too high, Guees another number"));
        } else {
            console.log("Too low, try again")
            userInput = Number(prompt("Too low, Guees another number"));
        }
    }
    console.log("Congratulations! you guess it right. you've attempted", numberOfAttemps, "times");
    let playAgainPrompt = prompt("Do you want to play again? (yes/no)");
    let playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";
    if (playAgain === "yes") {
        startSecretNumberGame();
    } else {
        console.log("Thank you playing");
    }
}
startSecretNumberGame();