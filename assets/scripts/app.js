//import {apiKey} from './util.js';

//import apikeydefault from './util.js';

//import {apikey, abc as aliasedVar} from './util.js';

//import * as utilObject from './util.js';

//console.log(utilObject.abc);
console.log("test");

function greetUser(userName, greetMessage = "Hello bud!"){
    console.log(userName + " " + greetMessage);
}

(userName, greetMessage = "Hello bud!") =>{
    console.log(userName + " " + greetMessage);
}

// export default function(){ console.log("default anonymous function here!");}
// export default () => { console.log("default anonymous function here!");}

// use default value for greetMessage
greetUser("Zizo");

//below we override default value for function
greetUser("Mickey", "from Disneyland here!");

//Defining object below and setting some properties
const user = {
    name:'Zizo',
    age: 39,
    //creating function inside the object - could or could not return a value with the keyword normally
    greetUserInsideObject(){
        console.log("method executing inside object!");
        console.log(this.age); // must use this keyword to reference internal object attributes
    }

};

// test fetching
console.log(user.name + " is " + user.age + " years old!!");
// test outputing the object 
console.log(user);
user.greetUserInsideObject();