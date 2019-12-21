/**
 * Functions
 * 
 * functions are used to make named re-usable code
 * 
 * They come in many types:
 *  Declaration
 *  Expression
 *  Fat Arrow
 *  Curried
 */

 //A function declaration starts by declaring what it is: a function
 //the round braces let us take in parameters
 function doStuff(thing){
    //notice the ``, those are backticks and they let us use template literals
    //template literals let us put strings with data, data is stored inside ${}
    let myActions = `I am going to do this action ${thing}`;
    console.log(myActions);
    //functions can also return values using the return keyword
    return myActions;
    //once a function returns something, it ends
}

//another kind of function is a function expression.  They live in variables
let myFunc = function(){
    return 42;// return 42 is just an exmaple, also not every function returns a value
}

//a fat arrow is like a function expression, except it uses a short for for the word function
//fat arrow functions inherit the value of "this" from their parent
//if they are a single line, they automatically return a value
let funkyFunction = () =>{};

//curried functions return a new function for each variable
function makeFace(numEyes){
    return function(numNoses){
        return function(numMouths){
            return `I have ${numEyes} eyes, ${numNoses} noses, and ${numMouths} mouths`;
        }
    }
}