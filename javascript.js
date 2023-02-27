// Created per The Odin Project - https://www.theodinproject.com/lessons/foundations-calculator
// Thank you for everything you all do. Stay awesome!



// General declarations to initialize varialbes. 

var numbers = document.querySelectorAll(".num");
var numDisplay = document.querySelector('.input-display');
var clearNum = document.querySelector('._numac');
var symbols = document.querySelectorAll('.symbol');
var decimal = document.querySelector('._numdec');
var currentSymbol;

var currentNumber = '0';    
var functionNumber = '';

// Main execution / logic in the two forEach loops below.
// General logic to have the 0 display initally, currently causes a bug that 
// will make 0 + 3 look like  + 3 = 3 which is not that huge.

// Not choosing a symbol after adding will cause you to add on to your current #.

numbers.forEach(number => number.addEventListener('click', () => {
    if(currentNumber === '0') currentNumber = ''; 

//Keeping it this way, could turn it into an if statement but this looks cleaner.
    currentSymbol != undefined 
    ? functionNumber += number.textContent 
    : currentNumber += number.textContent;
    updateDisplay();
    
    
}))

//Logic to decide how to parse each symbol, using the operate function I created.

symbols.forEach(symbol => symbol.addEventListener('click', () => {
    if(currentSymbol != undefined || symbol.textContent == '='){
        currentNumber = operate(currentNumber, functionNumber, currentSymbol);
        numDisplay.textContent += " = " + currentNumber;
        functionNumber = '';
        if(symbol.textContent == '=')  currentSymbol = undefined;
        return;
        
    }
    currentSymbol = symbol.textContent;
    
    numDisplay.textContent = currentNumber + " " + currentSymbol + " ";
}))

// For AC to work properly.

clearNum.addEventListener('click', () => clear());

function clear(){
    currentNumber = '0';
    functionNumber = '';
    currentSymbol = undefined;
    numDisplay.textContent = currentNumber;
}
function updateDisplay(){
    
    currentSymbol != undefined 
     ? numDisplay.textContent = currentNumber + " " + currentSymbol + " " + functionNumber
     : numDisplay.textContent = currentNumber;
}

// To allow for decimals.
decimal.addEventListener('click', () => {
    currentSymbol == undefined ? currentNumber = addOneDecimal(currentNumber) : 
    functionNumber = addOneDecimal(functionNumber);
    updateDisplay();
})


function addOneDecimal(num){
    return String(num).includes('.') ? num : num += '.';
}

// Math operations, ez stuff.

function operate(num1, num2, symbol){
    if(num2 == undefined || num1 == undefined) return 0;
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
            clear();
            return 0;

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

 