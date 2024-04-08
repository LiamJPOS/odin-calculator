//TODO Make display font smaller the less space there is
//TODO subsequent clicks of operation buttons should change what operation is going to be performed next
//TODO add button to make a number negative
//TODO add display for sum

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
            answer = currentNumber === 0 ? 8008135 : previousNumber / currentNumber;
            break;
        case "":
            answer = currentNumber;
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

const operationButtons = document.querySelectorAll(".button-operator");
operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        operation = button.textContent;
        performOperation(button, previousNumber, currentNumber);
    });
});

const clearButton = document.getElementById("button-clear");
clearButton.addEventListener("click", () => {
    currentNumber = [];
    previousNumber = [];
    operation = ''
    updateDisplay(currentNumber);
})

const equalsButton = document.getElementById("button-equals");
equalsButton.addEventListener("click", () => {  
    const answer = getOperationAnswer(previousNumber, currentNumber, operation)
    previousNumber = String(answer).split('');
    updateDisplay(previousNumber);
    currentNumber = [];
})
