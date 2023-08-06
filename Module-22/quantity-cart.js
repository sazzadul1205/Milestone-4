const shoppingCart= [
    {name: 'Shoe', price: 1200, quantity: 2},
    {name: 'shirt', price: 2200, quantity: 8},
    {name: 'pant', price: 3700, quantity: 4},
    {name: 'belt', price: 600, quantity: 22},

];

function TotalCost(products) {
    let sum =0;
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        // console.log(element);
        const productTotal = element.price * element.quantity;
        sum = sum +  productTotal;
    }
    return sum;
}
const expense= TotalCost(shoppingCart);
console.log('Total expense: ',expense);