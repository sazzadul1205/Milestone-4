// math to the power
const result = Math.pow(3, 8);
console.log(result);

// absulute  result delete the - in value
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
console.log(gap);

if (gap < 5) {
    console.log('you guys can be friend');
} else {
    console.log('You guys stay apart');
}

// ----------------------
// 
// -------------------
// round ing coverts the n8umber to full number
const num3 = 2.4567;

const fullNumber = Math.round(num3);
console.log(fullNumber);

// ceiling value
const cealing = Math.ceil(2.356);
console.log(cealing);

const floor = Math.floor(2.6654);
console.log(floor);

// ---------
// random
console.log(Math.random());
// to get random number in a full number
const random = Math.round(Math.random()*10);
console.log(random);

for(let i = 0; i < 20; i++){
    const random2 = Math.round(Math.random()*20);
    console.log(random2);

}