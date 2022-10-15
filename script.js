let cScore = 0
let pScore = 0

const compScore = document.querySelector(".comp-score")
const playerScore = document.querySelector(".player-score")
const compHand = document.querySelector(".comp-hand")
const playerHand = document.querySelector(".player-hand")
const result = document.querySelector(".result")
const playerOptions = document.querySelectorAll(".player-options")

const options = {
    rock: "✊🏻",
    paper: "🤚🏻",
    scissors: "🖖🏻",
}
const compOptions = ["rock", "paper", "scissors"]

const playerSelection = (pOpt) => {
    if (pOpt) {
        playerHand.textContent = options[pOpt]
    }
    compSelection(pOpt)
}
const go = () => {
    playerOptions.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            playerSelection(e.target.getAttribute("data-action"))
        })
    })
}
go()

const random = (range) => {
    return Math.floor(Math.random() * range)
}

const compSelection = (pOpt) => {
    let cOpt = compOptions[random(compOptions.length)]
    compHand.textContent = options[cOpt]

    comparison(pOpt, cOpt)
}
const updateScore = (txt) => {
    compScore.textContent = cScore
    playerScore.textContent = pScore
    result.textContent = txt
}
const comparison = (pOpt, cOpt) => {
    const pWon = "Player Wins!"
    const cWon = "Computer Wins!"
    const draw = "Nobody Wins, Draw!"
    if (pOpt === cOpt) {
        updateScore(draw)
    } else if (pOpt === "rock") {
        if (cOpt === "paper") {
            cScore += 1
            updateScore(cWon)
        } else if (cOpt === "scissors") {
            pScore += 1
            updateScore(pWon)
        }
    } else if (pOpt === "paper") {
        if (cOpt === "scissors") {
            cScore += 1
            updateScore(cWon)
        } else if (cOpt === "rock") {
            pScore += 1
            updateScore(pWon)
        }
    } else if (pOpt === "scissors") {
        if (cOpt === "rock") {
            cScore += 1
            updateScore(cWon)
        } else if (cOpt === "paper") {
            pScore += 1
            updateScore(pWon)
        }
    }
}
