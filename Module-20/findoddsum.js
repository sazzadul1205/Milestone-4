function GetSum(numbers) {
    let sum = 0;
    for(let i =0 ; i< numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index,element, sum);
    }
    return sum;
}

const myNumbers = [12, 32, 12, 11, 32, 45, 13, 15]
GetSum(myNumbers)
