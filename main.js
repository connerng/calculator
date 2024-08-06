// Helper functions
function isOperator(str) {
    if (str == "+" || str == "-" || str == "*" || str == "/") {
        return true;
    } else {
        return false;
    }
}

function numberClicked(num) {
    if (document.getElementById("ans-text").innerHTML == "0") {
        document.getElementById("ans-text").innerHTML = num;
    } else {
        document.getElementById("ans-text").innerHTML += num;
    }
}

function backspace() {
    document.getElementById("ans-text").innerHTML = document.getElementById("ans-text").innerHTML.slice(0, -1);
}

function clearAns() {
    document.getElementById("ans-text").innerHTML = "0";
}

function operatorClicked(op) {
    if (!isOperator(document.getElementById("ans-text").innerHTML.slice(-1))) {
        document.getElementById("ans-text").innerHTML += op;
    }
}

function evaluate() {
    expression = document.getElementById("ans-text").innerHTML;
    if (!isOperator(expression.slice(-1))) {
        const itemList = [];
        curItem = "";
        for (let i = 0; i < expression.length(); i++) {
            if (isOperator(expression.slice(i, i+1))) {
                itemList.push(curItem);
                curItem = "";
                itemList.push(expression.slice(i, i+1));
            } else {
                curItem += expression.slice(i, i+1);
            }
        }
    }
}
