/**
 * scope is where a value exists
 * 
 * A globally scope value exists everywhere
 * let and const live inside of {}
 * 
 * We can also change the scope with apply, call, and bind
 */

//lets make an object with a scope... scope is defined by {}

let bert = {homeTown:"Oshawa", hobby:"Hockey"};

//lets make another object with a scope

let sam = {homeTown:"Whitby", hobby:"Duck Racing"};

//now lets make an function
function talkAboutMe(greeting){
    console.log(`${greeting}!  I am from ${this.homeTown} and I like ${this.hobby}`);
};
//we can't run this function yet, this.name and this.hobby isn't global!
//lets try apply, apply will bind the function to bert.  We'll pass in greeting in an array

//the first parameter is our new scope...which is bert
//the second parameter is an array, its an array of parameters for our function!
talkAboutMe.apply(bert,["Howdy"]);

//if we try it with sam
talkAboutMe.apply(sam,["Hello"]);

//if we do the same thing with call, the only difference is we don't need the array
talkAboutMe.call(bert,"Hey");
//and now the same with sam
talkAboutMe.call(sam,"Hola");

/**
 * finally lets try the same thing with bind.
 * Bind will make a whole new function that is a copy of the old one, bound to the scope we choose
 */
let bertNotes = talkAboutMe.bind(bert);
//to call this we use:
bertNotes("Heyo!");
//lets try this with sam
let samNotes = talkAboutMe.bind(sam);
samNotes("Wakka Wakka!");


