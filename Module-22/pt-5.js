const number = [3, -7, 12, -5, 9, -2, 0, -10, 6, -4, 8, -1, -15, 11, -9, 13, -6, 14, -20, 17];

function onlyPositive(numbers) {
    let positiveNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = number[i];
        // console.log(element);
        if (element > 0) {
            positiveNumber.push(element);
        }
    }
    return positiveNumber;
}
const PositiveNumbers = onlyPositive(number);
console.log(PositiveNumbers);