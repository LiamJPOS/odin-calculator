//TODO Make display font smaller the less space there is

function updateDisplay(currentNumber){
    const display = document.getElementById("display-text");
    display.textContent = currentNumber.length < 1 ? 0 : currentNumber.join('')
}

function convertToNumber (array){
    return Number(array.join(''))
}

function getOperationAnswer (previousNumber, currentNumber, operation){
    previousNumber = convertToNumber(previousNumber);
    currentNumber = convertToNumber(currentNumber);
    let answer = 0;

    switch(operation){
        case "+":
            answer = previousNumber + currentNumber;
            break;
        case "-":
            answer = previousNumber - currentNumber;
            break;
        case "*":
            answer = previousNumber * currentNumber;
            break;
        case "/":
            currentNumber === 0 ? answer = 8008135 : answer = previousNumber / currentNumber;
            break;
            }
        
    return String(answer).includes(".") ? answer.toFixed(7) : answer;
}

function performOperation(button){
    operation = button.textContent;
    if (previousNumber.length < 1){
        previousNumber = currentNumber;
        currentNumber = [];
        updateDisplay(currentNumber);
    }
    else{
        answer = getOperationAnswer(previousNumber, currentNumber, operation);
        previousNumber = String(answer).split('');
        updateDisplay(previousNumber);
        currentNumber = [];
    }
}

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

const operationButtons = document.querySelectorAll(".button-operator");
operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        performOperation(button, previousNumber, currentNumber);
    });
});

const clearButton = document.getElementById("button-clear");
clearButton.addEventListener("click", () => {
    currentNumber = [];
    previousNumber = []
    operation = ''
    updateDisplay(currentNumber);
})
