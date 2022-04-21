const names = [{
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

const age = (names) => `Age:${names.age} </br>`;

const newAge =names.map((item)=> {
  return {
    name: item.name.toUpperCase(),  
    age: item.age
  }
})

// console.log(newAge)

const person = names.map((item)=> `names: ${item.name}</br>`)
const result = document.querySelector('#demo');
const result1 = document.querySelector('#demo1');

result.innerHTML= person.join('');
// result1.innerHTML= datas.join(' ');

