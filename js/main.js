const divOne = document.querySelector('.one')
const divTwo = document.querySelector('.two')
const divTree = document.querySelector('.tree')
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
    divOne,
    divTwo,
    divTree,
    divFour,
    divFive,
    divSix,
    divSeven,
    divEight,
    divNine,
]

function writeX(imgX){
    imgX.innerHTML = options[0]
}

console.log(localForInsert)

function randomLocal(){
    const locals = localForInsert.length
    const randomLocals = Math.floor(Math.random() * locals)
    let selectionLocation = localForInsert[randomLocals]
    selectionLocation.innerHTML = options[1]
    localForInsert.splice(localForInsert.indexOf(selectionLocation), 1)

    if(localForInsert == []){
        return
    }

    console.log(locals)
    console.log(randomLocals)
    console.log(selectionLocation)
    console.log(localForInsert)
}

function reset(){
    divOne.innerHTML = ''
    divTwo.innerHTML = ''
    divTree.innerHTML = ''
    divFour.innerHTML = ''
    divFive.innerHTML = ''
    divSix.innerHTML = ''
    divSeven.innerHTML = ''
    divEight.innerHTML = ''
    divNine.innerHTML = ''
}

divOne.addEventListener('click', () => {
    writeX(divOne)
    localForInsert.splice(localForInsert.indexOf(divOne), 1)
    randomLocal()
})

divTwo.addEventListener('click', () => {
    writeX(divTwo)
    localForInsert.splice(localForInsert.indexOf(divTwo), 1)
    randomLocal()
})

divTree.addEventListener('click', () => {
    writeX(divTree)
    localForInsert.splice(localForInsert.indexOf(divTree), 1)
    randomLocal()
})

divFour.addEventListener('click', () => {
    writeX(divFour)
    localForInsert.splice(localForInsert.indexOf(divFour), 1)
    randomLocal()
})

divFive.addEventListener('click', () => {
    writeX(divFive)
    localForInsert.splice(localForInsert.indexOf(divFive), 1)
    randomLocal()
})

divSix.addEventListener('click', () => {
    writeX(divSix)
    localForInsert.splice(localForInsert.indexOf(divSix), 1)
    randomLocal()
})

divSeven.addEventListener('click', () => {
    writeX(divSeven)
    localForInsert.splice(localForInsert.indexOf(divSeven), 1)
    randomLocal()
})

divEight.addEventListener('click', () => {
    writeX(divEight)
    localForInsert.splice(localForInsert.indexOf(divEight), 1)
    randomLocal()
})

divNine.addEventListener('click', () => {
    writeX(divNine)
    localForInsert.splice(localForInsert.indexOf(divNine), 1)
    randomLocal()
})

resetGame.addEventListener('click', reset)