function GetOdd(numbers) {
    const oddNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 != 0) {
            console.log(index, element);
            oddNumber.push(element);
        }
    }
    return oddNumber;
}

const myNumbers = [12, 32, 12, 11, 32, 45, 13, 15];
const oddNumber = GetOdd(myNumbers);
console.log(oddNumber);
GetOdd(myNumbers);