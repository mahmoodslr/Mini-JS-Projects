const questions = [
    {
        question:"If x + y = 10 and y = 4, what is the value of x?",
        answers: [
            {text:"2" , correct:false},
            {text:"6" , correct:true},
            {text:"5" , correct:false},
            {text:"7" , correct:false}
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answers: [
            {text:"Vatican City" , correct:true},
            {text:"Nauru" , correct:false},
            {text:"Tuvalu" , correct:false},
            {text:"Shri Lanka" , correct:false}
        ]
    },
    {
        question:"which is the largest desert in the world?",
        answers: [
            {text:"Kalahari" , correct:false},
            {text:"Gobi" , correct:false},
            {text:"Sahara" , correct:false},
            {text:"Antarctica" , correct:true}
        ]
    },
    {
        question:"which is smallest continent in the world?",
        answers: [
            {text:"Asia" , correct:false},
            {text:"Australia" , correct:true},
            {text:"Arctic" , correct:false},
            {text:"Africa" , correct:false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startScreen = document.getElementById("start-screen");
const appScreen = document.querySelector(".app");
const startButton = document.getElementById("start-btn");
const timeLeftDisplay = document.getElementById("time-left");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    timeLeftDisplay.textContent = timeLeft;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (currentQuestionIndex < questions.length - 1) {
                handleNextButton();
            } else {
                showScore();
            }
        }
    }, 1000);
};

startButton.addEventListener("click", () => {
    startScreen.style.display = "none"; 
    appScreen.style.display = "block";
    startQuiz();
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    document.getElementById("timer-container").style.display = "block";
    showQuestion();
};

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
};

function resetState(){
    clearInterval(timerInterval);
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    if (currentQuestionIndex < questions.length) {
        startTimer();
    }
};

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach( button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};

function showScore(){
    resetState();
    clearInterval(timerInterval);
    document.getElementById("timer-container").style.display = "none";
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
};

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
};

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();