// numbers and operators
let n1 = null;
let op = null;
let n2 = null;

// main function to operate
function operate(n1, op, n2) {
    switch(op) {
        case "+": return Math.round((n1+n2) * 100) / 100;
        case "-": return n1-n2;
        case "*": return n1*n2;
        case "/": {
            if(Number(n2) === 0) {return "BOMMBOOCLAT";}
            return Math.round((n1/n2) * 100) / 100;
        }
        default: return "invalid operation";
    }
}


// DOM references
const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal");
const _delete = document.querySelector("#delete");
const clear = document.querySelector("#clear");
const misc = document.querySelectorAll(".misc-buttons");

// flags for display functionality
let opFlag = false;
let equalFlag = false;


numbers.forEach(number => {
    number.addEventListener('click', () => {
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
    });

    // change color when held
    number.addEventListener('mousedown', () => {
        number.style.cssText = "background-color: #F0FFF1;";
    });

    number.addEventListener('mouseup', () => {
        number.style.cssText = "background-color: #B3E9C7;";
    });

});

operators.forEach(operator => operator.addEventListener('click', () => {
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

misc.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.cssText = "background-color: #F0FFF1;";
    });

    button.addEventListener('mouseup', () => {
        button.style.cssText = "background-color: #B3E9C7;";
    });
});



// keyboard functionality (got from AI)
document.addEventListener('keydown', (event) => {
    const key = event.key;
    console.log(`Key pressed: ${key}`);

    if (!isNaN(key)) { // If the key is a number
        document.querySelector(`button[name="${key}"]`).click();
    } else if (key === '.') {
        decimal.click();
    } else if (key === '+') {
        document.querySelector('button[name="+"]').click();
    } else if (key === '-') {
        document.querySelector('button[name="-"]').click();
    } else if (key === '*') {
        document.querySelector('button[name="*"]').click();
    } else if (key === '/') {
        document.querySelector('button[name="/"]').click();
    } else if (key === 'Enter') {
        equal.click();
    } else if (key === 'Backspace') {
        _delete.click();
    } else if (key === 'Escape') {
        clear.click();
    }
});