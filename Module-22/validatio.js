function add(number1, number2) {
    if (typeof number1 != 'number' || typeof number2 != 'number') {
        return 'please enter a number please!!'
    }
    return number1 + number2
}

const result = add(12 , 45);
console.log(result);

function multiply(num1, num2) {
    console.log(num1, num2);
    return num1 * num2;
}
const output = multiply(12*32);
console.log(output);