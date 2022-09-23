let timer = document.querySelector(".time");
let btnStartGame = document.querySelector("#startGameBtn");
let btnPlayAgain = document.querySelector(".replay");
const btnSubmitInitials = $("#submitInitials");
let btnViewHighScores = document.querySelector(".highscore");
const startingPage = document.getElementById("startingPage");
let finalPage = document.getElementById(".scores");
let currentQuestionIndex = 0;
let finalResults = document.querySelector("#finals");
let score = 0;


let questions = [
    {
        question: "What does HTML stand for?",
        choices: [
            "Hyperlinks and Text Markup Language",
            "Home Tools Markup Language",
            "Home Text Makeup Language",
            "Hyper Text Markup Language"],
        answer: 3,
    },

    // {
    //     question: "How do you insert a comment in a CSS file",
    //     choices: ["// this is a comment //", "<!!this is a comment!!>", "/*this is a comment*/", "//this is a comment//"],
    //     answer: 2,
    // },

    // {
    //     question: "How do you select an element with the id=demo?",
    //     choices: ["demo", "#demo", ".demo", "*demo"],
    //     answer: 1,
    // },

    // {
    //     question: "Inside which HTML element do we put the Javascript?",
    //     choices: ["<Strings>", "<Booleans>", "<JS>", "<script>"],
    //     answer: 3,
    // },

    // {
    //     question: "How do you declare a JavaScript variable?",
    //     choices: ["var myPassword", "v myPassword", "variable myPassword", "my variable is declared"],
    //     answer: 0,
    // }
];

let quizQuestions = document.querySelector('.questions');

let secondsLeft = 10;

function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft <= 0) {
            // alert('Time is up');
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
};

function endGame() {
    timer.style.display = "block";
    timer.textContent = ("DONE-GAME FINISHED");
    $("#scores").show();
    $("#questions").hide();
    secondsLeft = 0;
    $("#finals").text("Your score is:" + score);

}

/* 
            display initials along with score
            automattically save the highest score
            display score when highscore button clicked*/


function beginQuiz() {
    timer.style.display = "block";
    startingPage.style.display = "none";
    $("#questions").show();
    setTime();

    quizContent();
};

function quizContent() {


    let currentQuestion = questions[currentQuestionIndex];
    $("#question").text(currentQuestion.question);

    for (let i = 0; i < currentQuestion.choices.length; i++) {


        let input = $("<input>", {

            value: [i],
            type: 'radio',
            name: 'choice',
        });

        let label = $("<label>", {
            text: currentQuestion.choices[i],
            class: 'answerChoice',
        });

        input.prependTo(label);
        label.prependTo('#answerList');
    }

};
//saving THE SCORE on storage but need for display screen
function finalScore() {
    let endingScore = {
        score: score,
        initial: $("#initials").val(),
    }


    //   console.log(higherScore);
    // let val = localStorage.getItem("endingScore");

    // const higherScore = JSON.parse(localStorage.getItem())
}

// function checkHighScore() {
//    

// function viewHighScore() {

//     let recentScore = JSON.parse(localStorage.getItem(endingScore));
//     if (recentScore == null) {
//         finalResults.innerHTML = "Not Available Yet"
//     }

//     else {
//         finalResults.innerHTML = recentScore.initial + recentScore.score;
//     }
// };

function playAgain() {

    location.reload();
};

$(document).ready(function () {
    $("#submitAnswer").click(function (event) {
        event.preventDefault();

        let correctAnswer = questions[currentQuestionIndex].answer;

        let userAnswer = $("input[name=choice]:checked").val();

        if (userAnswer == correctAnswer) {

            score++;

        } else {

            secondsLeft = secondsLeft - 10;
        }

        $(".answerChoice").remove();



        currentQuestionIndex++;

        if (currentQuestionIndex == questions.length) {




            endGame();
            console.log('reached end of questions');
        } else {

            quizContent();
        }
    });
});

btnStartGame.addEventListener("click", beginQuiz);

btnPlayAgain.addEventListener("click", playAgain);

btnSubmitInitials.click("click", finalScore);


// btnViewHighScores.addEventListener("click", viewHighScore);