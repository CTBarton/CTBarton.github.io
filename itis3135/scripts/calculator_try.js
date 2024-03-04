let currentInput = '';

function addNumber(num) {
    currentInput += num;
    updateDisplay(currentInput);
}

function addOperator(operator) {
    currentInput += operator;
    updateDisplay(currentInput);
}

function calculate() {
    try {
        const result = eval(currentInput);
        updateDisplay(result);
        currentInput = result;
    } catch (error) {
        updateDisplay('Error');
    }
}

function clearInput() {
    currentInput = '';
    updateDisplay('');
}

function updateDisplay(value) {
    document.getElementById('result').value = value;
}


