
// cart example
const cart = [
    {
        title: 'Samsung Galaxy $7',
        price: 599.00,
        amount: 1,
    },
    {
        title: 'Google Pixel',
        price: 499.99,
        amount: 2,
    },
    {
        title: 'Xiaomi Redmi Note 2',
        price: 699.99,
        amount: 4,
    },
    {
        title: 'Xiaomi Redmi Note 5',
        price: 399.99,
        amount: 3,
    },
]
 
let {totalItem, cartTotal} = cart.reduce((total, cartItem)=>{
    const{amount, price} = cartItem;
    total.totalItem = amount;
    total.cartTotal = amount * price;
    return total;
}, {
    totalItem: 0,
    cartTotal: 0,
})
cartTotal = parseFloat(cartTotal.toFixed(2)); //fix the integer value
console.log(totalItem, cartTotal);


