

var shopingitems = ['books', 'sunglass', 'shoes', 'pen']

var friendage = [12, 4, 5, 6, 32, 12];
var friendage = {
    rahim: 12,
    karim: 23,
    sami: 32,
    amin: 22,
    khaled: 32,
    robi: 9,
}

var ShoppingCart = {
    books: 3,
    sunglass: 5,
    keyboard: 3,
    mouse: 1,
    pen: 30,
    shoes: 2,
}

const keys = Object.keys(ShoppingCart);
console.log(keys);

const values = Object.values(ShoppingCart);
console.log(values);

for(var i =0; i < keys.length; i++ ){
    var propertyname = keys[i];
    var propartesValue = ShoppingCart[propertyname]
    console.log(propertyname, propartesValue);

}

for(var propertyname in ShoppingCart){
    const value = ShoppingCart[propertyname];
    console.log(propertyname, value);
}