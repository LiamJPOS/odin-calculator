//TODO
//Make display font smaller the less space there is

function updateDisplay(currentNumber){
    const display = document.getElementById("display-text");
    display.textContent = currentNumber.length < 1 ? 0 : currentNumber.join('')
}

function convertToNumber (array){
    return Number(array.join(''))
}

function subtract (previousNumber, currentNumber){
    previousNumber = convertToNumber(previousNumber);
    currentNumber = convertToNumber(currentNumber);
    return previousNumber - currentNumber;
}

const buttons = Array.from(document.querySelectorAll("button"));

let previousNumber = []
let currentNumber = [] 
let operation = ''

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
        if (currentNumber.length < 1){
            currentNumber.push("0");
            currentNumber.push(decimalButton.textContent);
        }
        else{
            currentNumber.push(decimalButton.textContent);
        }
        updateDisplay(currentNumber);
    }
})

const subtractButton = document.getElementById("button-subtraction");
subtractButton.addEventListener("click", () => {
    if (currentNumber.length < 1){
        currentNumber.push("-");
        updateDisplay(currentNumber)
    } 
    else{
        if (previousNumber.length < 1){
            previousNumber = currentNumber;
            currentNumber = [];
            updateDisplay(currentNumber)
        }
        else{
            answer = subtract(previousNumber, currentNumber); 
            previousNumber = String(answer).split('');
            updateDisplay(previousNumber);
            currentNumber = []; 
        }
    }
})



const operatorButtons = document.querySelectorAll(".button-operator");


const clearButton = document.getElementById("button-clear");
clearButton.addEventListener("click", () => {
    currentNumber = [];
    previousNumber = []
    operation = ''
    updateDisplay(currentNumber);
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

