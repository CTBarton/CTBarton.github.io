let currInput = '';

function clearInput() {
    currInput = '';
    updateDisplay('');
}

function updateDisplay(value) {
    document.getElementById('result').value = value;
}

function addNumber(num) {
    currInput += num;
    updateDisplay(currInput);
}

function addOperator(operator) {
    currInput += operator;
    updateDisplay(currInput);
}

function calculate() {
    try {
        const result = eval(currInput);
        updateDisplay(result);
        currInput = result;
    } catch (error) {
        updateDisplay('Error');
    }
}

window.onload = function() {
    document.getElementById("7").addEventListener("click", function() { 
        addNumber('7'); });
    document.getElementById("8").addEventListener("click", function() { 
        addNumber('8'); });
    document.getElementById("9").addEventListener("click", function() { 
        addNumber('9'); });
    document.getElementById("4").addEventListener("click", function() { 
        addNumber('4'); });
    document.getElementById("5").addEventListener("click", function() { 
        addNumber('5'); });
    document.getElementById("6").addEventListener("click", function() { 
        addNumber('6'); });
    document.getElementById("1").addEventListener("click", function() { 
        addNumber('1'); });
    document.getElementById("2").addEventListener("click", function() { 
        addNumber('2'); });
    document.getElementById("3").addEventListener("click", function() { 
        addNumber('3'); });
    document.getElementById("0").addEventListener("click", function() { 
        addNumber('0'); });
    document.getElementById("add").addEventListener("click", function() { 
        addOperator('+'); });
    document.getElementById("subtract").addEventListener("click", function() { 
        addOperator('-'); });
    document.getElementById("multiply").addEventListener("click", function() { 
        addOperator('*'); });
    document.getElementById("divide").addEventListener("click", function() { 
        addOperator('/'); });
    document.getElementById("equal").addEventListener("click", calculate);
    document.getElementById("clearButton").addEventListener("click", clearInput);
}
