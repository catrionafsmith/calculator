const add = function(a, b) {
    return (a + b);
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a*b;
}

const divide = function(a, b) {
    return a/b;
}

const operate = function(a, op, b) {
    if (op == "+") { 
       return add(a, b);
    } else if (op == "-") {
        return subtract(a, b);
    } else if (op == "*") {
        return multiply(a, b);
    } else if(op == "/") {
        return divide(a, b);   
    } else {
        console.log("Hmmm")
    }
}

console.log(operate(16, "/", 8))