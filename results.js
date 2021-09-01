let username=document.querySelector(".username")
let save=document.querySelector(".save")
let finalScore=document.querySelector(".final-score")
let mostrecentscore = localStorage.getItem("mostrecentscore")

let highscores = JSON.parse(localStorage.getItem("highscores")) || []

const MAX_HIGH_SCORE = 5
finalScore.innerText=mostrecentscore

username.addEventListener('keyup',(e) => {
    save.disabled = !username.value
})

saveHighScore = (event) =>{
    event.preventDefault()

    let score1={
        score:mostrecentscore,
        name:username.value
    }
    highscores.push(score1)

    highscores.sort((a,b) => {
        return b.score-a.score
    })
    highscores.splice(5)
    localStorage.setItem('highscores',JSON.stringify(highscores))
    window.location.assign('/')
} 