const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'gold'},
    {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'deep blue'},
    {name: 'iphone', camera: 12, storage: '32gb', price: 82000, color: 'White'},
    {name: 'Shawmi', camera: 12, storage: '32gb', price: 52000, color: 'aquamarine'},
    {name: 'Oppo ', camera: 12, storage: '32gb', price: 20000, color: 'Black'},
    {name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'Red'},
    {name: 'HTC  ', camera: 12, storage: '32gb', price: 62000, color: 'Black'},
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const element = phones[i];
        if (element.price < cheapest.price) {
            cheapest = element;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);