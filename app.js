let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let user_Score = document.querySelector("#userScore");
let comp_Score = document.querySelector("#compScore");



const genCompChoice = () => {
       const options = ["rock", "paper", "scissors"];
       const randIdx =  Math.floor(Math.random() * 3); 
       return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = 'orange'; 
};

const showWinner = (userWin) =>{
    if (userWin === true){
        msg.innerText = "You won";
        msg.style.backgroundColor = 'green';
        userScore += 1;
        user_Score.innerText = userScore;


    }else {
        msg.innerText = "Computer won";
        msg.style.backgroundColor = 'red';
        compScore += 1;
        comp_Score.innerText = compScore; 
    }
};

const playGame = (userChoice) => {
    console.log("User's choice = ", userChoice);
    const compChoice  = genCompChoice();
    console.log("Comp choice = ",compChoice);


    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false: true;
        } else {
            userWin = compChoice === "rock" ? false: true;
        }

        showWinner(userWin);

        }
    };
    
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
         const userChoice = choice.getAttribute("id");
         playGame(userChoice);
    });
});





