
function Factorial(num) {
    let result = 1;
    for(let i = num; i >= 1  ;i--){
        result *= i;
        console.log(i);
    }
    return result;
}

const result = Factorial(10);
console.log(result);

