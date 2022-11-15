const places = document.querySelectorAll('#game div')
const message = document.querySelector('.message');
const resetGame = document.querySelector('.button-reset')
const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function randomLocation(){
    let draw = indexes.every((index) => places[index].matches('.selected'))
    if(draw){
        return message.textContent = `Empate!`
    }

    let chosenPlace = places[Math.floor(Math.random() * places.length)]
    if(chosenPlace.matches('.x') || chosenPlace.matches('.o')){
        return randomLocation()
    }

    chosenPlace.innerHTML = `<span>O</span>`
    message.textContent = `Sua vez de jogar!`
    chosenPlace.setAttribute('class', 'o selected')
    
    let winnerO = combinations.some((comb) => comb.every((index) => places[index].matches('.o')))
    if(winnerO){
        return message.textContent = `Você perdeu, que tal tentar novamente!`
    }
}

function click(clickedLocation) {
    if(clickedLocation.matches('.x') || clickedLocation.matches('.o')){
        return alert('Local já selecionado!')
    }

    clickedLocation.innerHTML = `<span>X</span>`
    clickedLocation.setAttribute('class', 'x selected')
    
    let winnerX = combinations.some((comb) => comb.every((index) => places[index].matches('.x')))
    winnerX ? message.textContent = `Parabéns você venceu!` : randomLocation()
}

function reset(){
    message.textContent = `Clique em um quadrado e vamos jogar!`
    places.forEach((item) => {
        item.innerHTML = ''
        item.removeAttribute('class', 'x o selected')
    })
}

places.forEach((placeClicked) => {
    placeClicked.addEventListener('click', () => {
        click(placeClicked)
    })
})

resetGame.addEventListener('click', reset)