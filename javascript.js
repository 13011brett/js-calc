var numbers = document.querySelectorAll(".num");
var numDisplay = document.querySelector('.input-display');
var clearNum = document.querySelector('._numac');
var symbols = document.querySelectorAll('.symbol');

var currentSymbol;

var currentNumber = '0';    
var functionNumber = '';

numbers.forEach(number => number.addEventListener('click', () => {
    if(currentNumber === '0') currentNumber = ''; 
    currentSymbol != undefined 
    ? functionNumber += number.textContent 
    : currentNumber += number.textContent;

    currentSymbol != undefined 
     ? numDisplay.textContent = currentNumber + " " + currentSymbol + " " + functionNumber
     : numDisplay.textContent = currentNumber;
    
    
}))

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

function equals(number){
    return Number(number);
}




clearNum.addEventListener('click', () => clear());

function clear(){
    currentNumber = '0';
    functionNumber = '';
    currentSymbol = undefined;
    numDisplay.textContent = currentNumber;
}





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

 