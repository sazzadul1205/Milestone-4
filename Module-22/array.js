const contry = 'Bangladesh';
const age = 52;
const IsIndipendent = true;
const student = {
    is: 121, 
    class: 11,
    name: 'Sazzadul',
}
const friends = [12, 17, 14, 27, 22, 19];
function add(num1, num2) {
    return num1 + num2
}

console.log(typeof contry);
console.log(typeof age);
console.log(typeof IsIndipendent);
console.log(typeof student);


console.log(Array.isArray(friends));


console.log(typeof add);

// ---------------------

console.log(friends.includes(30));

// ------------------

if(friends.indexOf(30) !== -1){

}

// ---------
// concat
const newFriends = [32, 43, 12, 22]

const allfriends = newFriends.concat(friends);
console.log(allfriends);