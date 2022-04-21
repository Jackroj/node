// filter method
const people = [
    {name: 'bob',age: 20, position: 'developer'},
    {name: 'deva',age: 25, position: 'designer'},
    {name: 'peter',age: 30, position: 'manager'},
    {name: 'susy',age: 29, position: 'intern'},
    {name: 'anna',age: 35, position: 'developer'},
]
//filter the young people
const young = people.filter((person)=>{
    // return true;
   
    // if(person.age < 30){
    //     return person;
    // }

    return person.age < 25;

})
// console.log(young)

//filter the developer 

const developer = people.filter((person) => person.position == 'developer')
// console.log(developer);
const seniordeveloper = people.filter((person) => person.position == 'manager')
// console.log(seniordeveloper);

//find 
const deva = people.find((person) => person.name == 'deva')
console.log(deva);