var timer = document.querySelector(".time");
var btnStartGame = document.querySelector("#startGameBtn");
var questions = [
    {   
        question: "What does HTML stand for?",
        choice1: "1. Hyperlinks and Text Markup Language",
        choice2: "2. Home Tools Markup Language",
        choice3: "3. Home Text Makeup Language",
        choice4: "4. Hyper Text Markup Language",
        answer: "4. Hyper Text Markup Language",
    },

    { 
        question: "How do you insert a comment in a CSS file",
        choice1: "1. // this is a comment //",
        choice2: "2. <!!this is a comment!!>",
        choice3: "3. /*this is a comment*/",
        choice4: "4. 'this is a comment'",
        answer: "3. /*this is a comment*/",
    },

    { 
        ququestion: "How do you select an element with the id=demo?",
        choice1: "1. demo",
        choice2: "2. #demo",
        choice3: "3. .demo",
        choice4: "4. *demo",
        answer: "2. #demo",
    },

    { 
        ququestion: "Inside which HTML element do we put the Javascript?",
        choice1: "1. <Strings>",
        choice2: "2. <Booleans>",
        choice3: "3. <JS>",
        choice4: "4. <script>",
        answer: "4. <script>",
    },

    { 
        ququestion: "How do you declare a JavaScript variable?",
        choice1: "1. var myPassword;",
        choice2: "2. v myPassword;",
        choice3: "3. variable myPassword;",
        choice4: "4. my variable is declared and its called mypassword;",
        answer: "1. var myPassword;",
    }
];

var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time Remaining: " + secondsLeft;

        if(secondsLeft===0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

setTime();

function startGame() {
    
};

btnStartGame.addEventListener("click"); 