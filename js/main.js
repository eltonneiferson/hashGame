const divOne = document.querySelector('.one')
const divTwo = document.querySelector('.two')
const divThree = document.querySelector('.three')
const divFour = document.querySelector('.four')
const divFive = document.querySelector('.five')
const divSix = document.querySelector('.six')
const divSeven = document.querySelector('.seven')
const divEight = document.querySelector('.eight')
const divNine = document.querySelector('.nine')
const resetGame = document.querySelector('.reset-game')

const options = [
    '<img src="imgs/x.png" alt="X" width="140">',
    '<img src="imgs/circle.png" alt="O" width="140">',
]

const placeToClick = [
    divOne, divTwo, divThree,
    divFour, divFive, divSix,
    divSeven, divEight, divNine
]

function randomLocation(){
    const locals = placeToClick.length
    const randomLocal = Math.floor(Math.random() * locals)
    let chosenPlace = placeToClick[randomLocal]
    placeToClick.splice(placeToClick.indexOf(chosenPlace), 1)
    chosenPlace.innerHTML = options[1]
    chosenPlace.classList.add('o')
}

function click(clickedLocation) {
    if(placeToClick.includes(clickedLocation) == false){
        return alert('Local já selecionado')
    } else {
        clickedLocation.innerHTML = options[0]
        clickedLocation.classList.add('x')
        placeToClick.splice(placeToClick.indexOf(clickedLocation), 1)
        if(placeToClick.length == 0){
            return
        }
        randomLocation()
    }
}

function winGame(){
    if((divOne, divTwo, divThree).classList.contains('x') || (divOne, divTwo, divThree).classList.contains('o')){
        alert('Parabéns você venceu!')
    }
}

function reset(){
    placeToClick.forEach((item)=> {
        item.innerHTML = ''
    })
    placeToClick.length = 0
    placeToClick.push(divOne, divTwo, divThree, divFour, divFive, divSix, divSeven, divEight, divNine)
}

placeToClick.forEach((placeClicked) => {
    placeClicked.addEventListener('click', () => {
        click(placeClicked)
    })
})

resetGame.addEventListener('click', reset)