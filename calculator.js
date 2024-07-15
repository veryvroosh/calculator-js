let n1, n2, op;

function operate(n1, op, n2) {
    switch(op) {
        case "+": return n1+n2;
            break;
        case "-": return n1-n2;
            break;
        case "*": return n1*n2;
            break;
        case "/": return n1/n2;
            break;
        default: return "invalid operation";
    }
}