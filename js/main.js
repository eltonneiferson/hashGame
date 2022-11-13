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
    '<img class="x" src="imgs/x.png" alt="X" width="140">',
    '<img class="o" src="imgs/circle.png" alt="O" width="140">',
]

const placeToClick = [
    divOne, divTwo, divThree,
    divFour, divFive, divSix,
    divSeven, divEight, divNine
]

function checkWin(){
    if(divOne.classList.contains('x') && divTwo.classList.contains('x') && divThree.classList.contains('x') == true){
        console.log('You Win!')
    }

    if(divFour.classList.contains('x') && divFive.classList.contains('x') && divSix.classList.contains('x') == true){
        console.log('You Win!')
    }

    if(divSeven.classList.contains('x') && divEight.classList.contains('x') && divNine.classList.contains('x') == true){
        console.log('You Win!')
    }

    if(divOne.classList.contains('x') && divFour.classList.contains('x') && divSeven.classList.contains('x') == true){
        console.log('You Win!')
    }

    if(divTwo.classList.contains('x') && divFive.classList.contains('x') && divEight.classList.contains('x') == true){
        console.log('You Win!')
    }

    if(divThree.classList.contains('x') && divSix.classList.contains('x') && divNine.classList.contains('x')  == true){
        console.log('You Win!')
    }
    
    if(divOne.classList.contains('x') && divFive.classList.contains('x') && divNine.classList.contains('x') == true){
        console.log('You Win!')
    }

    if(divThree.classList.contains('x') && divFive.classList.contains('x') && divSeven.classList.contains('x') == true){
        console.log('You Win!')
    }
}

function draw(){
    if(placeToClick.length == 0){
        alert('Empate!')
    }
}

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

function reset(){
    placeToClick.forEach((item)=> {
        item.innerHTML = ''
        item.classList.remove('x')
        item.classList.remove('o')
    })
    placeToClick.length = 0
    placeToClick.push(divOne, divTwo, divThree, divFour, divFive, divSix, divSeven, divEight, divNine)
}

placeToClick.forEach((placeClicked) => {
    placeClicked.addEventListener('click', () => {
        click(placeClicked)
        checkWin()
        draw()
    })
})

resetGame.addEventListener('click', reset)