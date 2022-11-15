const places = document.querySelectorAll('#game div')
const message = document.querySelector('.message');
const resetGame = document.querySelector('.reset-game')
const x ='<img class="x" src="imgs/x.png" alt="X" width="90">'
const o = '<img class="o" src="imgs/circle.png" alt="O" width="90">'
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
const initialMessage = 'Clique em um quadrado e vamos jogar!'
const playerWon = 'Parabéns você venceu!'
const playerDraw = 'Empate!'
const playerLost = 'Você perdeu, que tal tentar novamente!'

function randomLocation(){
    let chosenPlace = places[Math.floor(Math.random() * places.length)]
    if(chosenPlace.matches('.x') || chosenPlace.matches('.o')){
        return randomLocation()
    }
    chosenPlace.innerHTML = `${o}`
    chosenPlace.classList.add('o')
    chosenPlace.classList.add('selected')
    let winnerO = combinations.some((comb) => comb.every((index) => places[index].matches('.o')))
    if(winnerO){
        return message.textContent = `${playerLost}`
    }
}

function click(clickedLocation) {
    if(clickedLocation.matches('.x') || clickedLocation.matches('.o')){
        return alert('Local já selecionado!')
    }
    clickedLocation.innerHTML = `${x}`
    clickedLocation.classList.add('x')
    clickedLocation.classList.add('selected')

    let winnerX = combinations.some((comb) => comb.every((index) => places[index].matches('.x')))
    let draw = indexes.every((index) => places[index].matches('.selected'))
    
    if(winnerX){
        return message.textContent = `${playerWon}`
    }
    
    if(draw){
        return message.textContent = `${playerDraw}`
    }
        randomLocation()
}

function reset(){
    places.forEach((item)=> {
        item.innerHTML = ''
        item.classList.remove('x')
        item.classList.remove('o')
        item.classList.remove('selected')
    })
    message.textContent = `${initialMessage}`
}

places.forEach((placeClicked) => {
    placeClicked.addEventListener('click', () => {
        click(placeClicked)
    })
})

resetGame.addEventListener('click', reset)