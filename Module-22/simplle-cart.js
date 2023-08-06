const shoppingCart= [
    {name: 'Shoe', price: 1200},
    {name: 'shirt', price: 2200},
    {name: 'pant', price: 3700},
    {name: 'belt', price: 600},

];

function TotalCost(products) {
    let sum =0;
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        // console.log(element);
        sum = sum +  element.price;
    }
    return sum;
}
const expense= TotalCost(shoppingCart);
console.log('Total expense: ',expense);