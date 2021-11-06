document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'alarm',
            img: 'images/alarm-clock.png'
        },
        {
            name: 'book',
            img: 'images/book.png' 
        },
        {
            name: 'card-game',
            img: 'images/card-game.png'
        },
        {
            name: 'card-games',
            img: 'images/card-games.png'
        },
        {
         name: 'checker-board',
         img: 'images/checker-board.png'
        },
        {
            name: 'confrontation',
            img: 'images/confrontation.png'
        },
        {
            name: 'alarm',
            img: 'images/alarm-clock.png'
        },
        {
            name: 'book',
            img: 'images/book.png'
        },
        {
            name: 'card-game',
            img: 'images/card-game.png'
        },
        {
            name: 'card-games',
            img: 'images/card-games.png'
        },
        {
            name: 'checker-board',
            img: 'images/checker-board.png'
        },
        {
            name: 'confrontation',
            img: 'images/confrontation.png'
        },
    ]

    // {
    //     name: 'diamond',
    //         img: 'images/diamond.png'
    // },
    // {
    //     name: 'edit',
    //         img: 'images/edit.png'
    // },
    // {
    //     name: 'game',
    //         img: 'images/game.png'
    // },
    // {
    //     name: 'hourglass',
    //         img: 'images/hourglass.png'
    // },
    // {
    //     name: 'like',
    //         img: 'images/like.png'
    // },
    // {
    //     name: 'roller skate',
    //         img: 'images/roller-skate.png'
    // }

    cardArray.sort(() => 0.5 - Math.random())
    // create game board

    const grid = document.querySelector('.grid')
    const resultDisaply = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/frame.png')
            card.setAttribute('data-id', i)
            card.setAttribute('width', "100px")
            card.setAttribute('height', "100px")
            card.addEventListener('click', flipCardFunction)
            grid.appendChild(card)
        }
    }

    createBoard()

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (optionOneId === optionTwoId) { // same card clicked twice
            cards[optionOneId].setAttribute('src', 'images/frame.png')
            cards[optionTwoId].setAttribute('src', 'images/frame.png')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            // alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/square.png')
            cards[optionTwoId].setAttribute('src', 'images/square.png')
            cards[optionOneId].removeEventListener('click', flipCardFunction)
            cards[optionTwoId].removeEventListener('click', flipCardFunction)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/frame.png')
            cards[optionTwoId].setAttribute('src', 'images/frame.png')

            // alert('Sorry')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisaply.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisaply.textContent = 'Congratulations! You found them all'
        }

    }
    // flip your card

    function flipCardFunction() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 400)
        }
    }


})