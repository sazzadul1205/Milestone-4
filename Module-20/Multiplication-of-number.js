//  1 * 2 * 3* 4* 5* 6

function Factorial(num) {
    let result = 1;
    for(let i = 1; i < num; i++){
        result *= i;
    }
    return result;
}
const result = Factorial(10);
console.log(result);

// function Factorial(num) {
//     let result = 1;
//     for(let i = 1 ; i < num; i--){
//         result *= i;
//     }
//     return result;
// }

// const result = Factorial(10);
// console.log(result);