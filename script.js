let ques = document.querySelector(".ques");
let choices = document.querySelectorAll(".choice-text");
let scoreText = document.querySelector(".score");

let currentQues = {}
let acceptingAns = true
let score = 0
let quesCtr = 0
let availableQues = []

let questions = [
    {
        ques: "Which type of JavaScript language is ___?",
        choice1:"Object-Oriented",
        choice2:"Object-Based",
        choice3:"Assembly-language",
        choice4:"High-level",
        answer:2,
    },
    {
        ques: "Which one of the following also known as Conditional Expression?",
        choice1:"Alternative to if-else",
        choice2:"Switch statement",
        choice3:"If-then-else statement",
        choice4:"immediate if",
        answer:4,
    },
    {
        ques: "When interpreter encounters an empty statements, what it will do?",
        choice1:"Shows a warning",
        choice2:"Prompts to complete the statement",
        choice3:"Throws an error",
        choice4:"Ignores the statements",
        answer:4,
    },
    {
        ques: "Which of the following type of a variable is volatile?",
        choice1:"Mutable variable",
        choice2:"Dynamic variable",
        choice3:"Volatile variable",
        choice4:"Immutable variable",
        answer:1,
    },
    {
        ques: "Which one of the following is the correct way for calling the JavaScript code?",
        choice1:"Preprocessor",
        choice2:"Triggering Event",
        choice3:"RMI",
        choice4:"Function/Method",
        answer:4,
    }
]
const MAX_QUES=5;
const SCORE_PTS=100;
let startGame = () => {
    quesCtr = 0;
    score = 0;
    availableQues=[...questions]
    getNewQues()
}

let getNewQues = () => {
    if(availableQues.length == 0 || quesCtr > MAX_QUES){
        localStorage.setItem('mostrecentscore',score);
        return window.location.assign('/results.html')
    }
    quesCtr++;
    let quesIdx = Math.floor(Math.random()*availableQues.length)
    currentQues=availableQues[quesIdx];
    ques.innerText=currentQues.ques
    choices.forEach(choice => {
        let number = choice.dataset['number']
        choice.innerText=currentQues['choice'+number]
    })
    availableQues.splice(quesIdx,1);
    acceptingAns=true;
}

choices.forEach(choice => {
    choice.addEventListener('click',e => {
        if(!acceptingAns)    return;
        acceptingAns=false;
        const selectedChoice = e.target;
        const selectedAns = selectedChoice.dataset['number']
        let classToApply = selectedAns == currentQues.answer ? 'correct' : 'wrong';
        if(classToApply == 'correct')
            incrementScore(SCORE_PTS)
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQues()
        },1000)
    })
})

incrementScore = num =>{
    score+=num
    scoreText.innerText=score

}

startGame()