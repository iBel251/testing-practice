function stringLength(string) {
    let length = string.length;
    if(length < 1 || length >10){
        return 'Error! String out of range.';
    }
    return length;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

class Calculator {
    add(a,b){
        return a+b;
    }
    subtract(a,b){
        return a-b;
    }
    divide(a,b){
        return a/b;
    }
    multiply(a,b){
        return a*b;
    }
}

module.exports = {};
module.exports.stringLength = stringLength;
module.exports.reverseString = reverseString;
module.exports.Calculator = Calculator;