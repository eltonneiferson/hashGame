const places = document.querySelectorAll('#game div')

const resetGame = document.querySelector('.reset-game')

const x ='<img class="x" src="imgs/x.png" alt="X" width="140">'
const o = '<img class="o" src="imgs/circle.png" alt="O" width="140">'

function randomLocation(){
    let chosenPlace = places[Math.floor(Math.random() * places.length)]
    if(chosenPlace.matches('.x') || chosenPlace.matches('.o')){
        return randomLocation()
    }
    chosenPlace.innerHTML = `${o}`
    chosenPlace.classList.add('o')
}

function click(clickedLocation) {
    if(clickedLocation.matches('.x') == true || clickedLocation.matches('.o')){
        return alert('Local já selecionado!')
    }
    clickedLocation.innerHTML = `${x}`
    clickedLocation.classList.add('x')
    randomLocation()
}

function reset(){
    places.forEach((item)=> {
        item.innerHTML = ''
        item.classList.remove('x')
        item.classList.remove('o')
    })
}

function checkWin(){
    if(places[0].matches('.x') && places[1].matches('.x') && places[2].matches('.x')){
        alert('Temos um vencedor!!!')
    }
}

places.forEach((placeClicked) => {
    placeClicked.addEventListener('click', () => {
        click(placeClicked)
        checkWin()
    })
})

resetGame.addEventListener('click', reset)