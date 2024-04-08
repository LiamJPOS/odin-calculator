function updateDisplay(currentNumber){
    const display = document.getElementById("display-text");
    let fontSize = 4
    if (currentNumber.length > 6){
        for (let i = 6; i < currentNumber.length; i++){
            fontSize -= 0.5;
        }
    }
    display.style.fontSize = `${fontSize}rem`;
    display.textContent = currentNumber.length < 1 ? 0 : currentNumber.join('');
}

function convertToNumber (array){
    return Number(array.join(''))
}

function convertToArray (number){
    return String(number).split('');
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
            answer = currentNumber === 0 ? "Nope" : previousNumber / currentNumber;
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
        previousNumber = convertToArray(answer);
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
    previousNumber = convertToArray(answer);
    updateDisplay(previousNumber);
    currentNumber = [];
})

const negativeButton = document.getElementById("button-negative");
negativeButton.addEventListener("click", () => {
    if (currentNumber[0] === "-"){
        currentNumber = currentNumber.slice(1)
    }
    else{
        currentNumber.splice(0, 0, '-');
    }
    updateDisplay(currentNumber);
})

const percentButton = document.getElementById("button-percent");
percentButton.addEventListener("click", () => {
    let converted = convertToNumber(currentNumber);
    converted /= 100;
    currentNumber = convertToArray(converted);
    updateDisplay(currentNumber);
})

const backButton = document.getElementById("button-back");
backButton.addEventListener("click", () => {
    currentNumber.pop();
    updateDisplay(currentNumber)
})

