const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
const touchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);

let result = 0
let hitposition = -1
let currentTime = timeLeft.textContent
let hitpositionSquare = squares[0]

function randomSquare() {
    squares.forEach(className => {
        className.classList.remove('mole')
        className.classList.remove('mole-whacked')
    })
    let randomPosition = squares[Math.floor(Math.random() * 9)]
    while (hitposition === randomPosition.id) {
        randomPosition = squares[Math.floor(Math.random() * 9)]
    }

    hitpositionSquare = randomPosition
    randomPosition.classList.add('mole')

    hitposition = randomPosition.id
}

squares.forEach(id => {
        id.addEventListener('mouseup', () => {
            if (id.id === hitposition) {
                result = result + 1
                score.textContent = result
                hitpositionSquare.classList.remove('mole-whacked')
            }
        })

        id.addEventListener('mousedown', () => {
            if (id.id === hitposition) {
                hitpositionSquare.classList.remove('mole')
                hitpositionSquare.classList.add('mole-whacked')
            }
        })
        if (touchDevice) {
            id.addEventListener('pointerdown', () => {
                if (id.id === hitposition) {
                    hitpositionSquare.classList.remove('mole')
                    hitpositionSquare.classList.add('mole-whacked')
                }
            })
            id.addEventListener('pointerup', () => {
                if (id.id === hitposition) {
                    result = result + 1
                    score.textContent = result
                    hitpositionSquare.classList.remove('mole-whacked')
                }
            })
        }
    }
)

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 700)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert('Game Over! Your score is ' + result)
    }
}

let timerId = setInterval(countDown, 1000)