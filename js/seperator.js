const object = [{
    name:'deva',
    age: 12
  }, 
  {
      name:'praveen',
    age: 18
},
{
    name:'praveen',
    age: 18
},
{
    name:'praveen',
    age: 18
},
{
    name:'andreson',
    age: 24
}];

// ES6 methods
//using the Set to avoid the repeated data
//[...] using the spread operator for the unique data
const datas = ['first',...new Set(object.map((item)=> item.name))];

const result3 = document.querySelector('.demo2');

result3.innerHTML=  datas.map((item)=> {
    return `<button>${item}</button>`
  }).join(' ');
  