var timer = document.querySelector(".time");
var btnStartGame = document.querySelector("#startGameBtn");
var btnPlayAgain = document.querySelector(".replay");
var btnSubmitInitials = document.querySelector(".submitInitials");
var btnViewHighScores = document.querySelector(".highscore");
const startingPage = document.getElementById("startingPage");
let currentQuestionIndex = 0;
// let finalScore = document.querySelector("#finalscore");
let score =0;



var questions = [
    {
        question: "What does HTML stand for?",
        choices: [
            "Hyperlinks and Text Markup Language",
            "Home Tools Markup Language",
            "Home Text Makeup Language",
            "Hyper Text Markup Language"],
        answer: 3,
    },

    {
        question: "How do you insert a comment in a CSS file",
        choices: ["// this is a comment //", "<!!this is a comment!!>", "/*this is a comment*/", "//this is a comment//"],
        answer: 2,
    },

    { 
        question: "How do you select an element with the id=demo?",
        choices: ["demo", "#demo", ".demo", "*demo"],
        answer: 1,
    },

    { 
        question: "Inside which HTML element do we put the Javascript?",
        choices: ["<Strings>","<Booleans>","<JS>","<script>"],
        answer: 3,
    },

    { 
        question: "How do you declare a JavaScript variable?",
        choices: ["var myPassword", "v myPassword", "variable myPassword", "my variable is declared"],
        answer: 0,
    }
];

var quizQuestions = document.querySelector('.questions');

var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            alert('Time is up');
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
};

function endGame() {
    timer.style.display = "block";
    timer.textContent= ("DONE-GAME FINISHED");
}


function beginQuiz() {
    timer.style.display = "block";
    startingPage.style.display = "none";
    $("#questions").show();
    setTime();

    quizContent();
};

function quizContent() {
    //getting the questions to show up one by one

    let currentQuestion = questions[currentQuestionIndex];
    $("#question").text(currentQuestion.question);

    for (let i = 0; i < currentQuestion.choices.length; i++) {


        let input = $("<input>", {
            
            value: [i],
            type: 'radio',
            name: 'choice',
        });

      let label =  $("<label>", {
            text: currentQuestion.choices[i],
            class: 'answerChoice',
        });

        input.prependTo(label);
        label.prependTo('#answerList');
    }

};

// function wrongAnswer() {
//     //alert for wrong answer to show up and that time id deducted
//     //timer to go down by 10 seconds here as well so secondsLeft = secondsleft -10?
// };


// function scoreRender() {
//     //showing the high score or theyre score

// };

// function submitInitial() {
// };

// function generateScore() {
//     //local storage comes in play here?get item set item

// };

// function increment() {
//     var counterPoints= document.querySelector("#finalscore");
//     counterPoints.innerText = ++score;
//     finalScore.style.display = "block";
// };

function playAgain() {
    location.reload();
};

$(document).ready(function() {
    $("#submitAnswer").click(function (event) {
        event.preventDefault();
        debugger;
        let correctAnswer = questions[currentQuestionIndex].answer;

        let userAnswer = $("input[name=choice]:checked").val();

        if (userAnswer == correctAnswer) { 
            alert('Correct');
            // score = ++score;// console.log('yes')
            // score = score+1;
            // score += 1;
            score++; //increment by 1 so 2 goes to 3, returns 2
            // ++score; //increment by 1 so 2 goes to 3, returns 3,
            

        } else {
           alert('That is incorrect, your time will reduce by 10 seconds!')
           secondsLeft = secondsLeft - 10; //  console.log('wrong');
        }

        $(".answerChoice").remove();

        // let choices = document.querySelector(".answerChoice");
        // for (let choice of choices) {
        //     choice.remove();
        // }

        currentQuestionIndex++;

        if (currentQuestionIndex == questions.length) {
        //   increment();  
        console.log('reached end of questions');
        } else {

            quizContent();
        }
    });
});

btnStartGame.addEventListener("click", beginQuiz);

btnPlayAgain.addEventListener("click", playAgain);

// btnSubmitInitials.addEventListener("click", submitInitial);

// btnViewHighScores.addEventListener("click", highScores)