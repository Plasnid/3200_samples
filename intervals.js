/**
 * intervals are the key to most game design
 * 
 * they show things working on a schedule, for example once per second, or minute or hour
 * 
 * the first parameter is the function to run
 * 
 * the second parameter is the time between each run of the function
 * 
 * lets check out an example of an interval!
 * 
 * the one shown here would run a function every 500 milliseconds
 * let myInterval = setInterval(function(){},500)
 * 
 * we store the interval in a variable so we can shut it off at some point
 * 
 * lets try a real one now!  Lets shut it off after it runs 10 times;
 */

 let intervalRuns = 0

let myInterval = setInterval(() => {
    console.log(`Hey! I'm a message from an interval! ${intervalRuns}`);
    intervalRuns +=1;
    if(intervalRuns>10){
        clearInterval(myInterval);
    }
},500)