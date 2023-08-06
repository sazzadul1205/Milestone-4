function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    // console.log(sum);
    return sum;
}

// add(4, 5)
var total = add(57, 78);
// console.log('Total :', total);

function BringSingara(money) {
    var Singleprice = 10;
    var quality = money / Singleprice;
    return quality;
}
var singara = BringSingara(200);
console.log(singara);