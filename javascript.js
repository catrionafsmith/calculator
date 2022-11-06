// Standard Calculator Functions

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
    if (b==0) return "Actually, you can't divide by zero :)";
    let divAnswer = a/b;
        if (Number.isInteger(divAnswer)) return divAnswer
    return ((a/b).toFixed(6));
}

// Operator Function

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
// Starting constants and display
const display = document.querySelector(".display")
display.textContent = "Let's Calculate!";


let firstSavedValue = "";
let savedValue = "";
let pressedOperator = "";

//Functions of number buttons
const but1 = document.querySelector(".one")
but1.addEventListener("click", function() {
    savedValue += "1";
    display.textContent = savedValue;
  });

const but2 = document.querySelector(".two")
but2.addEventListener("click", function() {
    savedValue += "2";
    display.textContent = savedValue;
  });

const but3 = document.querySelector(".three")
but3.addEventListener("click", function() {
    savedValue += "3";
    display.textContent = savedValue;
});

const but4 = document.querySelector(".four")
but4.addEventListener("click", function() {
    savedValue += "4";
    display.textContent = savedValue;
  });

const but5 = document.querySelector(".five")
but5.addEventListener("click", function() {
    savedValue += "5";
    display.textContent = savedValue;
});

const but6 = document.querySelector(".six")
but6.addEventListener("click", function() {
savedValue += "2";
display.textContent = savedValue;
});

const but7 = document.querySelector(".seven")
but7.addEventListener("click", function() {
    savedValue += "7";
    display.textContent = savedValue;
  });

const but8 = document.querySelector(".eight")
but8.addEventListener("click", function() {
    savedValue += "8";
    display.textContent = savedValue;
});

const but9 = document.querySelector(".nine")
but9.addEventListener("click", function() {
    savedValue += "9";
    display.textContent = savedValue;
  });

//Functions of operator buttons
const butPoint = document.querySelector(".point")
butPoint.addEventListener("click", function() {
    if (savedValue.includes(".")) {
        display.textContent = "Cannot have more than 1 decimal point";
    } else {
        savedValue += ".";
        display.textContent = savedValue;
    }
})

const butAdd = document.querySelector(".add")
butAdd.addEventListener("click", function() {
    display.textContent = "+";
    
    if (firstSavedValue == 0) {
        firstSavedValue = savedValue
        savedValue = ""
    } else {
        let interDisplay = operate(Number(firstSavedValue), pressedOperator, Number(savedValue)); 
        display.textContent = interDisplay
        firstSavedValue = interDisplay
        savedValue = ""
    }
    pressedOperator = "+"

    
});

const butSubt = document.querySelector(".subtract")
butSubt.addEventListener("click", function() {
    display.textContent = "-";
    
    if (firstSavedValue == 0) {
        firstSavedValue = savedValue
        savedValue = ""
    } else {
        let interDisplay = operate(Number(firstSavedValue), pressedOperator, Number(savedValue)); 
        display.textContent = interDisplay
        firstSavedValue = interDisplay
        savedValue = ""
    }
    pressedOperator = "-"
    
});

const butMult = document.querySelector(".multiply")
butMult.addEventListener("click", function() {
    display.textContent = "x";
    
    if (firstSavedValue == 0) {
        firstSavedValue = savedValue
        savedValue = ""
    } else {
        let interDisplay = operate(Number(firstSavedValue), pressedOperator, Number(savedValue)); 
        display.textContent = interDisplay
        firstSavedValue = interDisplay
        savedValue = ""
    }
    pressedOperator = "*"
    
});

const butDiv = document.querySelector(".divide")
butDiv.addEventListener("click", function() {
    display.textContent = "÷";
    
    if (firstSavedValue == 0) {
        firstSavedValue = savedValue
        savedValue = ""
    } else {
        let interDisplay = operate(Number(firstSavedValue), pressedOperator, Number(savedValue)); 
        display.textContent = interDisplay
        firstSavedValue = interDisplay
        savedValue = ""
    }
    pressedOperator = "/"
    
});

const butClear = document.querySelector(".clear")
butClear.addEventListener("click", function() {
    display.textContent = "";
    savedValue = ""
    firstSavedValue = "" 
    });

const butBackspace = document.querySelector(".backspace")
butBackspace.addEventListener("click", function() {
    savedValue = savedValue.slice(0, -1);
    display.textContent = savedValue;
})

const butEquals = document.querySelector(".equals")
butEquals.addEventListener("click", function() {
    let interDisplay = operate(Number(firstSavedValue), pressedOperator, Number(savedValue)); 
    display.textContent = interDisplay
    });

// console.log(savedValue)