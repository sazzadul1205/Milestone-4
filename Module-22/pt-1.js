function FeetToInch(feet) {
    const Inch = feet * 12;
    return Inch;
}

const Feet = 23;
const Toinch = FeetToInch(Feet);
console.log(Feet ,'feets are', Toinch, 'inches');