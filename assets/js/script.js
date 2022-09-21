var timer = document.querySelector(".time");
var btnStartGame = document.querySelector("#startGameBtn");
var btnPlayAgain = document.querySelector(".replay");
var btnSubmitInitials = document.querySelector(".submitInitials");
var btnViewHighScores = document.querySelector(".highscore");
const startingPage = document.getElementById("startingPage");
let currentQuestionIndex = 0;


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

    // { 
    //     question: "How do you select an element with the id=demo?",
    //     choice1: "1. demo",
    //     choice2: "2. #demo",
    //     choice3: "3. .demo",
    //     choice4: "4. *demo",
    //     answer: "2. #demo",
    // },

    // { 
    //     question: "Inside which HTML element do we put the Javascript?",
    //     choice1: "1. <Strings>",
    //     choice2: "2. <Booleans>",
    //     choice3: "3. <JS>",
    //     choice4: "4. <script>",
    //     answer: "4. <script>",
    // },

    // { 
    //     question: "How do you declare a JavaScript variable?",
    //     choice1: "1. var myPassword;",
    //     choice2: "2. v myPassword;",
    //     choice3: "3. variable myPassword;",
    //     choice4: "4. my variable is declared and its called mypassword;",
    //     answer: "1. var myPassword;",
    // }
];

var quizQuestions = document.querySelector('.questions');

var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
};



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

function correctAnswer() {
    //alert for right answer to show up 

};

function wrongAnswer() {
    //alert for wrong answer to show up and that time id deducted
    //timer to go down by 10 seconds here as well so secondsLeft = secondsleft -10?
};

function solution() {
    // how to get the right answer from index to show up 

};

function scoreRender() {
    //showing the high score or theyre score
};

function submitInitial() {
};

function generateScore() {
    //local storage comes in play here?get item set item

};

function highScores() {
    //viewing highscores
};

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
            console.log('yes')
        } else {
             console.log('wrong');
        }

        $(".answerChoice").remove();

        // let choices = document.querySelector(".answerChoice");
        // for (let choice of choices) {
        //     choice.remove();
        // }

        currentQuestionIndex++;

        if (currentQuestionIndex == questions.length) {
            console.log('reached end of questions');
        } else {

            quizContent();
        }
    });
});

btnStartGame.addEventListener("click", beginQuiz);

btnPlayAgain.addEventListener("click", playAgain);

btnSubmitInitials.addEventListener("click", submitInitial);

btnViewHighScores.addEventListener("click", highScores)