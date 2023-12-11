let currentInput = ''; 

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput); 
        updateDisplay();
    } catch (error) {
        currentInput = 'Error'; f
        updateDisplay();
    }
}

function calculateModulus() {
    try {
        currentInput = eval(currentInput);
        currentInput = currentInput + "%";
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function calculatePower() {
    try {
        currentInput = currentInput.replace("^", "**");
        currentInput = eval(currentInput); 
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}


function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
