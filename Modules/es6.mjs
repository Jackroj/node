// simple way to get the value
import {plus, sub} from "./module.mjs";
import {power_four} from "./index.mjs";

console.log(power_four(3));
console.log(plus(20, 5));
console.log(sub(500, 1));
// global way to get the value
// And call tha each function as like obj 
    //  import * as val from './module.mjs';
        // console.log(val.plus(1, 2));
        // console.log(val.sub(100, 2));