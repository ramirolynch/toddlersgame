(function(){

    // colors functionality
    
    const colors = ['purple','yellow','green','blue','orange','red']

    const startButton = document.querySelector('#start')
    const stopButton = document.querySelector('#stop')
    const main = document.querySelector('main')
    main.style.display = 'flex'
    main.style.justifyContent = 'center'
    main.style.alignItems = 'center'

    function sayColor(color) {

        let h1 = document.createElement('h1')
        h1.innerText = colors[color]
        main.append(h1)
      
    }


    function colorRepetition() {

        if(document.querySelector('main>h1')) {
            document.querySelector('main>h1').remove()

        }
        if(document.querySelector('main>div')) {
            document.querySelector('main>div').remove()

        }

        let randomColor = Math.floor(Math.random() * (colors.length - 1) + 1)
        document.body.style.backgroundColor = colors[randomColor]
        startButton.style.display = 'none'
        stopButton.style.display = 'block'


        setTimeout(function(){ 
            sayColor(randomColor) 
        }, 3000)
    
    }
    
    let myTimer;
    
    function repeatColor () {

    myTimer = setInterval(colorRepetition, 5000)
    
    
    }

    function stopRepeat() {

    clearInterval(myTimer)

    document.body.style.backgroundColor = '#EDF5E1'
    startButton.style.display = 'block'
    stopButton.style.display = 'none'
    
    if(document.querySelector('main>h1')) {
        document.querySelector('main>h1').remove()

    }

    }
   
    startButton.addEventListener('click', repeatColor)
    stopButton.addEventListener('click', stopRepeat)  


// shapes functionality

const startShapes = document.querySelector('#startShapes')
const stopShapeButton = document.querySelector('#stopShapes')


// square
let square = document.createElement('div')
square.style.width = '100px'
square.style.height = '100px' 
square.style.backgroundColor = '#05386B'

//rectangle
let rectangle = document.createElement('div')
rectangle.style.width = '200px'
rectangle.style.height = '100px' 
rectangle.style.backcgroundColor = '#05386B'

// circle 
let circle = document.createElement('div')
circle.style.width = '100px'
circle.style.height = '100px' 
circle.style.backgroundColor = '#05386B'
circle.style.borderRadius = '50%'

// triangle up

let triangleUp = document.createElement('div')
triangleUp.style.width = 0
triangleUp.style.height = 0 
triangleUp.style.borderLeft = '50px solid transparent'
triangleUp.style.borderRight = '50px solid transparent'
triangleUp.style.borderBottom = '100px solid #05386B'

let star = document.createElement('div')
star.setAttribute('id', 'star-five');

const shapeArray = [rectangle, circle, triangleUp, star]


function randomShape() {
    
    if(document.querySelector('main>div')) {
        document.querySelector('main>div').remove()
    }
    if(document.querySelector('main>h1')) {
        document.querySelector('main>h1').remove()
    }


    let randomShape = Math.floor(Math.random() * (shapeArray.length - 1) + 1)
    main.append(shapeArray[randomShape])

    startShapes.style.display = 'none';
    stopShapeButton.style.display = 'block';

 }

let shapeTimer;
    
function repeatShape () {

shapeTimer = setInterval(randomShape, 5000)

}


function stopShapes() {

    clearInterval(shapeTimer)

    document.body.style.backgroundColor = '#EDF5E1'

    stopShapeButton.style.display = 'none';
    startShapes.style.display = 'block';
    
    if(document.querySelector('main>div')) {
        document.querySelector('main>div').remove()
   }
   if(document.querySelector('main>h1')) {
    document.querySelector('main>h1').remove()
}

}

startShapes.addEventListener('click', repeatShape)
stopShapeButton.addEventListener('click', stopShapes)

// Numbers


// let startNumbers = document.querySelector('#startNumbers')
// let stopNumbers = document.querySelector('#stopNumbers')

let arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 'Play Again!']

let i = 0;    

let numbersTimer;      

function repeatNumbers() {

numbersTimer = setInterval(numbersLoop, 2000)

}

function numbersLoop() {   

    if(document.querySelector('main>h1')) {
        document.querySelector('main>h1').remove()
    }
    if(document.querySelector('main>div')) {
        document.querySelector('main>div').remove()
    }
    startNumbers.style.display = 'none'
    stopNumbers.style.display = 'block'
            
    let numberH1 = document.createElement('h1')   
    numberH1.innerText = arrayNumbers[i]
    main.append(numberH1) 
    i++
    if (i >= arrayNumbers.length) {
        i = 0;
    }
                      
}

function stopNumberLoop() {

    if(document.querySelector('main>h1')) {
        document.querySelector('main>h1').remove()
    }
    if(document.querySelector('main>div')) {
        document.querySelector('main>div').remove()
    }

    document.body.style.backgroundColor = '#EDF5E1'
    startNumbers.style.display = 'block'
    stopNumbers.style.display = 'none'

    clearInterval(numbersTimer);
    

}

console.log(startNumbers)


startNumbers.addEventListener('click', repeatNumbers)
stopNumbers.addEventListener('click', stopNumberLoop)

}
)()