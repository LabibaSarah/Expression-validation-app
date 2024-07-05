// script.js
function updatePlaceholder() {
    const expressionType = document.getElementById('expressionType').value;
    const expressionInput = document.getElementById('expressionInput');
    switch (expressionType) {
        case 'email':
            expressionInput.placeholder = 'Enter email address';
            break;
        case 'phone':
            expressionInput.placeholder = 'Enter phone number';
            break;
        case 'postcode':
            expressionInput.placeholder = 'Enter post code';
            break;
    }
}

function validateExpression() {
    const expressionType = document.getElementById('expressionType').value;
    const expression = document.getElementById('expressionInput').value;
    const resultElement = document.getElementById('result');

    let regex;

    switch (expressionType) {
        case 'email':
            regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            break;
        case 'phone':
            regex = /^01[0-9]{9}$/; //  11-digit phone number
            break;
        case 'postcode':
            regex = /^[A-Za-z0-9]{5,6}$/; // country's postcode format
            break;
        default:
            resultElement.textContent = 'Invalid selection';
            resultElement.style.color = 'red';
            return false;
    }

    if (regex.test(expression)) {
        resultElement.textContent = 'Valid Expression';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Invalid Expression';
        resultElement.style.color = 'red';
    }

    return false; // Prevent form submission
}
