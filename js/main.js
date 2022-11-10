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

const localForInsert = [
    divOne, divTwo, divThree,
    divFour, divFive, divSix,
    divSeven, divEight, divNine
]

function randomLocal(){
    const locals = localForInsert.length
    const randomLocal = Math.floor(Math.random() * locals)
    let chosenLocation = localForInsert[randomLocal]
    localForInsert.splice(localForInsert.indexOf(chosenLocation), 1)
    chosenLocation.innerHTML = options[1]
}

function click(clickedLocation) {
    if(localForInsert.includes(clickedLocation) == false){
        return alert('Local já selecionado')
    } else {
        clickedLocation.innerHTML = options[0]
        localForInsert.splice(localForInsert.indexOf(clickedLocation), 1)
        if(localForInsert.length == 0){
            return
        }
        randomLocal()
    }
}

function reset(){
    divOne.innerHTML = ''
    divTwo.innerHTML = ''
    divThree.innerHTML = ''
    divFour.innerHTML = ''
    divFive.innerHTML = ''
    divSix.innerHTML = ''
    divSeven.innerHTML = ''
    divEight.innerHTML = ''
    divNine.innerHTML = ''
    localForInsert.length = 0
    localForInsert.push(divOne, divTwo, divThree, divFour, divFive, divSix, divSeven, divEight, divNine)
}

divOne.addEventListener('click', () => {
    click(divOne)
})

divTwo.addEventListener('click', () => {
    click(divTwo)
})

divThree.addEventListener('click', () => {
    click(divThree)
})

divFour.addEventListener('click', () => {
    click(divFour)
})

divFive.addEventListener('click', () => {
    click(divFive)
})

divSix.addEventListener('click', () => {
    click(divSix)
})

divSeven.addEventListener('click', () => {
    click(divSeven)
})

divEight.addEventListener('click', () => {
    click(divEight)
})

divNine.addEventListener('click', () => {
    click(divNine)
})

resetGame.addEventListener('click', reset)