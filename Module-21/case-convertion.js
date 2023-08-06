const UserName = 'Sazzadul';
const UserInput = 'Sazzadul'
console.log(UserName.toLowerCase());
console.log(UserName.toUpperCase());
console.log(UserName.toLocaleLowerCase());
if (UserName.toLowerCase() == UserInput.toLowerCase()) {
    console.log('Valid User');
}
else{
    console.log('invalid User');
}