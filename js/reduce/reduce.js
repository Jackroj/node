// reduce
//iterate call back function
// reduce to a single value, num, array, obj
// 1st parameter ('acc')- (accumulator)total of all calculation
// 2nd parameter ('curr')- current iteration value

const staff = [
    {name: 'bob',age: 20, position: 'developer', salary: 100},
    {name: 'deva',age: 25, position: 'designer', salary: 300},
    {name: 'peter',age: 30, position: 'manager', salary: 400},
    {name: 'susy',age: 29, position: 'intern', salary: 100},
    {name: 'anna',age: 35, position: 'developer', salary: 10},
]

const dailytotal= staff.reduce((total, person) => {
    console.log(total);
    console.log(person.salary);
    total += person.salary;
    return total;
}, 0)
console.log(dailytotal);
