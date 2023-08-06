function MaxNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("The num1 is the biggest number");
    }
    else if (num2 > num1 && num2 > num3) {
        console.log("The num2 is the biggest number");
    }
    else {
        console.log("The num3 is the biggest number");
    }
}

const num1 = 56;
const num2 = 76;
const num3 = 55;

const Biggest = MaxNumber(num1, num2, num3);
console.log(Biggest);