var numbers = document.querySelectorAll(".num");
var numDisplay = document.querySelector('.input-display');
var clearNum = document.querySelector('._numac');
var symbols = document.querySelectorAll('.symbols');

var currentNumber = '0';
var functionNumber;

numbers.forEach(number => number.addEventListener('click', () => {
    if(currentNumber === '0') currentNumber = ''; 
    currentNumber += number.textContent;
    numDisplay.textContent = currentNumber;
    
}))

symbols.forEach(symbol => symbol.addEventListener('click', () => 
                currentNumber = operate(currentNumber, functionNumber, symbol.textContent)))

function equals(number){
    return Number(number);
}

clearNum.addEventListener('click', () => clear());

function clear(){
    currentNumber = '0';
    numDisplay.textContent = currentNumber;
}


function operate(num1, num2, symbol){
    if(num2 == undefined) return;
    switch (symbol){
        case "X":
            return mult(num1, num2);
            
        case "/":
            return div(num1, num2);
        
        case "+":
            return add(num1, num2);
        
        case "-":
            return sub(num1, num2);

        default:
            return "ERROR";

    }
}


function add(num1, num2){
    return Number(num1) + Number(num2);
}

function sub(num1, num2){
    return Number(num1) - Number(num2);
}

function mult(num1, num2){
    return Math.round(Number(num1) * Number(num2) * 100)/100;
}

function div(num1, num2){
    return Math.round((Number(num1) / Number(num2)) * 100)/100;
}