//TODO
//Make display font smaller the less space there is

function updateDisplay(currentNumber){
    const display = document.getElementById("display-text");
    display.textContent = currentNumber.join('')
}

const buttons = Array.from(document.querySelectorAll("button"));

//Attach event listener so display buttons clicked run a function that updates the display
let previousNumber = []
let currentNumber = [] 


const numberButtons = document.querySelectorAll(".button-number");
numberButtons.forEach(button => button.addEventListener("click", () => {
    if (currentNumber.length <= 8 ){
    currentNumber.push(button.textContent);
    updateDisplay(currentNumber);
    }    
}))

const decimalButton = document.getElementById("button-decimal");
decimalButton.addEventListener("click", () => {
    if (!currentNumber.includes(".")){
        currentNumber.push(decimalButton.textContent)
        console.log(currentNumber)
    }
})



const operatorButtons = document.querySelectorAll(".button-operator");

const clearButton = document.getElementById("button-clear");

//previous number is 0
//current number and previous number is operated on?

//Handle clear that will empty calcInput and clear both displays

//Handle back button by having it remove last index from calcInput

//Handle equals by having it evaluate the array of calc input and displaying result

//Need only one decimal
// if decimal is inside calcInput don't do anything else add the decimal

//handle divide by 0

//handle negative numbers

//number buttons add to currentNumber
//if decimal in currentNumber decimal button does nothing which is how it works on apple calculator

