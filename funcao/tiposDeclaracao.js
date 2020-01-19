console.log(soma(1, 1))
// function declaration
function soma(x, y){
    return x + y
}

// function expression
const sub = function(x, y){
    return x - y
}
console.log(sub(1, 1))

// named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(1, 5))