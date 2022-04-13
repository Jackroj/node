// import fs from 'fs';

// console.log(fs.readFileSync('index.js', 'utf8'));
function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
export {
    add as plus,
    sub
};