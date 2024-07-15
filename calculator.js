let n1 = null;
let op = null;
let n2 = null;

function operate(n1, op, n2) {
    switch(op) {
        case "+": return Math.round((n1+n2) * 100) / 100;
        case "-": return n1-n2;
        case "*": return n1*n2;
        case "/": return Math.round((n1/n2) * 100) / 100;
        default: return "invalid operation";
    }
}

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal");
const _delete = document.querySelector("#delete");
const clear = document.querySelector("#clear");

numbers.forEach(number => number.addEventListener('click', () => {
    console.log(`${Number(number.name)}`);


    if (op) {
        display.textContent = ``;
    }

    display.textContent += `${number.name}`

    if(op) {
        n2 = Number(display.textContent);
    }

    operators.forEach(operator => {
       operator.style.cssText = "background-color: white;";
    });

}));

let opFlag = false;
operators.forEach(operator => operator.addEventListener('click', () => {
    console.log(`${operator.name}`)
    operator.style.cssText = "background-color: blue;"

    if(!n2) {
        n1 = Number(display.textContent);
        op = operator.name;
    } else {
        n1 = operate(n1, op, n2);
        display.textContent = `${n1}`
        n2 = null;
    }
}));

decimal.addEventListener('click', () => {
   display.textContent += ".";
});

equal.addEventListener('click', () => {
   display.textContent = operate(n1, op, n2);
});

_delete.addEventListener('click', () => {
   display.textContent = display.textContent.slice(0, -1);
});

clear.addEventListener('click', () => {
    n1 = null;
    op = null;
    n2 = null;
   display.textContent = "";
});