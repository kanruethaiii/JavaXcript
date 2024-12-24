//Create a function that takes an equation (e.g. "1+1"' ), and returns the answer.

function equation(str) {
    return eval(str);
}

console.log(equation("1+1")); // 2
console.log(equation("7*4-2")); // 26
console.log(equation("1+1+1+1+1")); // 5
