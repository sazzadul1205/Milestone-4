var ShoppingCart = {
    books: 3,
    sunglass: 5,
    keyboard: 3,
    mouse: 1,
    pen: 30,
}

var penCount = ShoppingCart.pen;
console.log(penCount);

var penCount2 = ShoppingCart["pen"];
var propartes =Object.keys(ShoppingCart)
console.log(propartes);

var propartesValue = Object.values(ShoppingCart);
console.log(propartesValue);

var propertyname = 'mouse';

var propartesValue =ShoppingCart[propertyname];
console.log(propertyname ,propartesValue);


// console.log(ShoppingCart)

ShoppingCart.mouse = 14;
console.log(ShoppingCart);

ShoppingCart['mouse'] =100;
console.log(ShoppingCart);

ShoppingCart[propertyname] = 80;
console.log(ShoppingCart);