const places = document.querySelectorAll('#game div')
const message = document.querySelector('.message');
const resetGame = document.querySelector('.reset-game')
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

    chosenPlace.innerHTML = `<img class="o" src="imgs/circle.png" alt="O" width="90">`
    message.textContent = `Sua vez de jogar!`
    chosenPlace.classList.add('o')
    chosenPlace.classList.add('selected')
    
    let winnerO = combinations.some((comb) => comb.every((index) => places[index].matches('.o')))
    if(winnerO){
        return message.textContent = `Você perdeu, que tal tentar novamente!`
    }
}

function click(clickedLocation) {
    if(clickedLocation.matches('.x') || clickedLocation.matches('.o')){
        return alert('Local já selecionado!')
    }
    clickedLocation.innerHTML = `<img class="x" src="imgs/x.png" alt="X" width="90">`
    clickedLocation.classList.add('x')
    clickedLocation.classList.add('selected')

    let winnerX = combinations.some((comb) => comb.every((index) => places[index].matches('.x')))
    winnerX ? message.textContent = `Parabéns você venceu!` : randomLocation()
}

function restoreDefault(item) {
    item.innerHTML = ''
    item.classList.remove('x')
    item.classList.remove('o')
    item.classList.remove('selected')
}

function reset(){
    places.forEach((item)=> restoreDefault(item))
    message.textContent = `Clique em um quadrado e vamos jogar!`
}

places.forEach((placeClicked) => {
    placeClicked.addEventListener('click', () => {
        click(placeClicked)
    })
})

resetGame.addEventListener('click', reset)