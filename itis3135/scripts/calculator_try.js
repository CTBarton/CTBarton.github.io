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



