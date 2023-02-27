var numbers = document.querySelectorAll(".num");
var numDisplay = document.querySelector('.input-display');
var clearNum = document.querySelector('._numac');
var currentNumber = '0';

numbers.forEach(number => number.addEventListener('click', () => {
    if(currentNumber === '0') currentNumber = ''; 
    currentNumber = currentNumber + number.textContent;
    numDisplay.textContent = currentNumber;
    
}))

function equals(number){
    return Number(number);
}

clearNum.addEventListener('click', () => clear());

function clear(){
    currentNumber = '0';
    numDisplay.textContent = currentNumber;
}
