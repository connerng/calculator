// Helper functions
function isOperator(str) {
    if (str == "+" || str == "-" || str == "*" || str == "/") {
        return true;
    } else {
        return false;
    }
}

function numberClicked(num) {
    if (document.getElementById("ans-display").value == "") {
        document.getElementById("ans-display").value = num;
    } else {
        document.getElementById("ans-display").value += num;
    }
}

function backspace() {
    document.getElementById("ans-display").value = document.getElementById("ans-display").value.slice(0, -1);
}

function clearAns() {
    document.getElementById("ans-display").value = "";
}

function operatorClicked(op) {
    if (!isOperator(document.getElementById("ans-display").value.slice(-1))) {
        document.getElementById("ans-display").value += op;
    }
}

function evaluateExpression() {
    const expression = document.getElementById("ans-display").value
    document.getElementById("ans-display").value = eval(expression);
}


