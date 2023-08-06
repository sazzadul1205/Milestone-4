// const Inch = 123;

// const feet = Inch / 12;

// console.log(feet);


// const dadainches = 144;
// const dadafeet = dadainches/12;
// console.log('Dada feet: ', dadafeet);

// const dadiinch = 60;
// const dadefeet = dadiinch/12;
// console.log('Dade feet:', dadefeet);


function ConvertToFeet(Inch) {
    const feet = Inch / 12;
    return feet;
}


const dadainch = 144;
const dadafeet = ConvertToFeet(dadainch);
console.log(dadafeet);


