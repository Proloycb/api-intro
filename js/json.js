// Javascript Object Notation
// JSON

const user = {id: 11, name: 'Gorib amir', job: 'actor'};
const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
    name: 'slack shop',
    address: 'sundar gar',
    profit: 20000,
    products: ['laptop', 'phone', 'watch'],
    owner: {
        name: 'slack soun',
        profession: 'artist'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner);