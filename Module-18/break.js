// break statement
// for (var i = 0; i <= 20; i++) {
//     console.log(i);
//     if(i>10){
//         break;
//     }
// }

// var Roast = 0;

// while (Roast , 10) {
//     console.log('Roast has been given to mme');
//     Roast++;
//     if(Roast > 4){
//         break; 
//     }
// }


var num = [23, 67, 55, 89, 80, 1223, 67, 22, 78, 7777, 9090];

for (var i = 0; i < num.length; i++) {
    var numbers = num[i];
    if (numbers >100) {
        break;
    }
    console.log(numbers);
}