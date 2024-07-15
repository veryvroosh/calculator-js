let n1, n2, op;

function operate(n1, op, n2) {
    switch(op) {
        case "+": return n1+n2;
        case "-": return n1-n2;
        case "*": return n1*n2;
        case "/": return n1/n2;
        default: return "invalid operation";
    }
}

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

numbers.forEach(number => number.addEventListener('click', () => {
    console.log(`${Number(number.name)}`);
    display.textContent += `${number.name}`



}));

operators.forEach(operator => operator.addEventListener('click', () => {
    console.log(`${operator.name}`)

    if(!n2) {
        n1 = Number(display.textContent);
        op = operator.name;
    } else {
        n1 = operate(n1, op, n2);
        n2 = null;
    }

    display.textContent += `${operator.name}`;
}));

equal.addEventListener('click', () => {
   display.textContent = operate(n1, op, n2);
});

clear.addEventListener('click', () => {
   display.textContent = "";
});