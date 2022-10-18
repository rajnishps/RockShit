//the functions are actually not reusable at all, this is how NOT to write functions
// score of computer and player
let cScore = 0
let pScore = 0

const compScore = document.querySelector(".comp-score")
const playerScore = document.querySelector(".player-score")
const compHand = document.querySelector(".comp-hand")
const playerHand = document.querySelector(".player-hand")
const result = document.querySelector(".result")
const playerOptions = document.querySelectorAll(".player-options")

//emoticons to be displayed according to the option the player and computer chooses
const options = {
    rock: "👊",
    paper: "🖐",
    scissors: "🖖",
}

//options for computer, to be used by the random function
const compOptions = ["rock", "paper", "scissors"]

//selects the correct emoticon to be used according to the selection made by the player and
//calls compSelection for computer's choice
const playerSelection = (pOpt) => {
    if (pOpt) {
        playerHand.textContent = options[pOpt]
    }
    compSelection(pOpt)
}

//takes the input from the button pressed by the player and send to playerSelection
const play = () => {
    playerOptions.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            playerSelection(e.target.getAttribute("data-action"))
        })
    })
}

//takes a number as input and returns a random number from 0 to the input
const random = (range) => {
    return Math.floor(Math.random() * range)
}

//selects computers option randomly using function random and displays the emoticon accordingly
const compSelection = (pOpt) => {
    let cOpt = compOptions[random(compOptions.length)]
    compHand.textContent = options[cOpt]

    comparison(pOpt, cOpt)
}

//updates the scores and results on the DOM
const updateScore = (txt) => {
    compScore.textContent = cScore
    playerScore.textContent = pScore
    result.textContent = txt
}

//compares the two selections[ by the computer and the player], changes the score and result to be displayed accordingly
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

play()
