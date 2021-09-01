let highscorelist = document.querySelector(".list")
let scores = JSON.parse(localStorage.getItem('highscores')) || []

highscorelist.innerHTML = scores.map(sc => {
    return `<li class="high-score">${sc.name} - ${sc.score}</li>`
}).join('')