/**
 * What is a class?
 * 
 * A class is a blueprint, a description of something to build
 * 
 * what we make from a class is an instance!
 */

/**
 * in ES5 we didn't have the class keyword.  We only had function.
 * 
 * In ES6 though, it is different!  We have classes, and by default
 * the first thing to run in a class is something called a constructor.
 * 
 * an ES6 class always starts with a capital letter
 * 
 * An es6 class looks like this:
 */

class Human{
    constructor(){
        
    }
}

//to make a new instance of a human we use the "new" keyword!
let jimbo = new Human();

//what if we have to pass in a variable?  What do we do?
//it looks like this:

class Alien{
    constructor(alienName){
        this.alienName = alienName;
        console.log(`my alien name is ${this.alienName}`);
    };
};

let kevin = new Alien("Kevin");
