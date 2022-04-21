//dot notation
const item = {
    name:'deva',
    age:20,
    phone: 1234567890
}
item.address = 'super'
// console.log(item)

// square bracket notation
const fruits = {
    'apple': ['apple', 'milk'],
    'mango': 'mango',
    'grapes': 'grapes'
}
// console.log(fruits['apple'])

// dynamic square bracket notaion
let app = 'data';
const key = 'banana'
const upt = {
    [app]: false
}
upt[key] = 'flower'
console.log(upt);

// update the value

const upd = {}


function updatefun(key, value){
    upd[key] = value;
}
updatefun('name', 'Deva');
updatefun('age', 12);
updatefun('address', 'north, Canada');
updatefun('phone', 1234567890);
console.log(upd)