function updateDisplay(currentNumber){
    const sumDisplay = document.getElementById("sum-display-text");
    sumDisplay.textContent = 
}

const buttons = Array.from(document.querySelectorAll("button"))

//Attach event listener so display buttons clicked run a function that updates the display
let previousNumber = []
let currentNumber = [] //can be used to track decimals

const numberButtons = document.querySelectorAll(".button-number");
numberButtons.forEach(button => button.addEventListener("click", () => {
    arrayToCalculate.push(button.textContent);
    currentNumber.push(button.textContent);
}))

const operatorButtons = document.querySelectorAll(".button-operator");

const clearButton = document.getElementById("button-clear");

//Updates the display

const displayButtons = buttons.filter(button => {
    return button.id !== "button-equals"
})

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

