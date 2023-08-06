var money = 10;
var DanishPrice = 100;
var ButterBun = 45;
var ToastBiscut = 10;

if (DanishPrice < money) {
    console.log("Danish bought");
}
else if(ButterBun < money){
    console.log("Butter bun bought");
}
else if (ToastBiscut < money) {
    console.log("Toast bought");
}
else{
    console.log("Bought tea");
}