// Generating a random number from 1 to 20
let secretNumber = Math.max(Math.trunc(Math.random() * 20)) + 1;
let score = 20;
let highScore = 0;

const changeMessage = function(string){
   document.querySelector('.message').textContent = string;
}

const styleChanging = function(bc, width, displayCheck, displayAgain){
    document.querySelector('.wrapper').style.backgroundColor = bc;
    document.querySelector('.number').style.width = width;
    document.querySelector('.check').style.display = displayCheck;
    document.querySelector('.again').style.display = displayAgain;
}
// Making score and highscore dynamic

document.querySelector('.score').textContent = score;
document.querySelector('.h-score').textContent = highScore;

const check = document.querySelector('.check').addEventListener('click', function () {
    
    // Taking the number from the input and converting it to number se we can compare it with the secretNumber

    const guess = Number(document.querySelector('.guess').value);

    // When user clicks on check button without giving an input
    if (!guess) {
        changeMessage('🚫 No number!');

        // When user guesses the right number    
    } else if (guess === secretNumber) {
        //Changing the html content
        changeMessage('🙌 Correct!');
        document.querySelector('.number').textContent = secretNumber;
        styleChanging("green","25rem","none","block");

        if (score > highScore) {
            document.querySelector('.h-score').textContent = score;
        }
        // When user tries a higher number
    } else if (guess > secretNumber) {
       changeMessage('👆 Too high!');
        score--;
        document.querySelector('.score').textContent = score;
        if (score <= 0){
            changeMessage('GAME OVER 😫');
            styleChanging("","","none","block");
        }
        // When user tries a lower number    
    } else if (guess < secretNumber) {
        changeMessage('👇 Too low');
        score--;
        document.querySelector('.score').textContent = score;
        if (score <= 0){
            changeMessage('GAME OVER 😫');
            styleChanging("","","none", "block");
        }
    }
    else{
        changeMessage('INVALID');
    }
})


// Restarting the game after clicking again button
const again = document.querySelector('.again').addEventListener('click', function () {
    // Restarting score and the random number
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    // Changing the html content
    changeMessage('Guess here ↙');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    styleChanging("rgba(85, 85, 85, 0.5)","15rem","block","none");
});