let n1 = null;
let op = null;
let n2 = null;

function operate(n1, op, n2) {
    switch(op) {
        case "+": return Math.round((n1+n2) * 100) / 100;
        case "-": return n1-n2;
        case "*": return n1*n2;
        case "/": {
            if(Number(n2) === 0) {return "BOMMBOOOCLAT";}
            return Math.round((n1/n2) * 100) / 100;
        }
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
const misc = document.querySelectorAll(".misc-buttons");

let opFlag = false;
let equalFlag = false;


numbers.forEach(number => number.addEventListener('click', () => {
    console.log(`${Number(number.name)}`);

    if(equalFlag === true) {
        display.textContent = ``;
        equalFlag = false;
    }


    if (op && opFlag === true) {
        display.textContent = ``;
        opFlag = false;
    }

    if (display.textContent.length < 12) {
        display.textContent += `${number.name}`
    }

    if(op) {
        n2 = Number(display.textContent);
    }

    operators.forEach(operator => {
       operator.style.cssText = "background-color: #B3E9C7;";
    });

}));

operators.forEach(operator => operator.addEventListener('click', () => {
    console.log(`${operator.name}`)
    operator.style.cssText = "background-color: #F0FFF1;"

    if(equalFlag === false) {
        op = operator.name;
    }

    if(!n2) {
        n1 = Number(display.textContent);
        op = operator.name;
        opFlag = true;
    } else {
        n1 = operate(n1, op, n2);
        display.textContent = `${n1}`
        n2 = null;
    }
}));

decimal.addEventListener('click', () => {
    if(!display.textContent.includes(".")) {
        display.textContent += ".";
    }
});

equal.addEventListener('click', () => {
   display.textContent = operate(n1, op, n2);
   n2 = null;
   equalFlag = true;
});

_delete.addEventListener('click', () => {
   display.textContent = display.textContent.slice(0, -1);
});

clear.addEventListener('click', () => {
    n1 = null;
    op = null;
    n2 = null;
   display.textContent = "";

   operators.forEach(operator => {
       operator.style.cssText = "background-color: #B3E9C7;";
   });
});



numbers.forEach(number => number.addEventListener('mousedown', () => {
    number.style.cssText = "background-color: #F0FFF1;";
}));

numbers.forEach(number => number.addEventListener('mouseup', () => {
    number.style.cssText = "background-color: #B3E9C7;";
}));

misc.forEach(button => button.addEventListener('mousedown', () => {
    button.style.cssText = "background-color: #F0FFF1;";
}));

misc.forEach(button => button.addEventListener('mouseup', () => {
    button.style.cssText = "background-color: #B3E9C7;";
}));