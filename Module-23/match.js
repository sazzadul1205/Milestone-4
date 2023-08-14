const numbers = [32, 65, 55, 89, 12, 11];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);

// }

for (const element of numbers) {
    console.log(element);
}

const products = [
    { id: 1, name: 'Samsung Phone', price: 12000 },
    { id: 2, name: 'Xiome Phone', price: 12000 },
    { id: 3, name: 'Linovo Phone', price: 12000 },
    { id: 4, name: 'iphone Phone', price: 12000 },
    { id: 5, name: 'htc Phone', price: 12000 },
    { id: 6, name: 'Nokia Phone', price: 12000 },
];

// for(const product of products){
//     console.log(product);
// }
function MatchedProducts(product, search) {
    const matched = [];
    for(const product of products){
        console.log(product.name.toLowerCase().includes(search));
        if (product.name.includes(search)) {
            matched.push(product)
        }

    }
    return matched;
}

const result = MatchedProducts(products, 'Samsung');
console.log(result);