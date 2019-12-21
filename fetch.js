/**
 * fetch is used to call api's or to grab json files
 * 
 * check out data.json to see what a json file looks like
 * JSON stands for JavaScript Object Notation
 * it's an object
 * 
 * fetch is a javascript promise, it uses .then to do things in order as they occur
 */

fetch("data.json")
.then(data =>data.json())
.then(data =>{
    //here we console log the whole data object
    console.log(data);
    //here we just grab the weather data
    console.log(data.weather);
    //remember forEach?  lets try it!  check out the console in your browser
    data.weather.forEach(daily => {
        console.log(`${daily.day} will be ${daily.conditions}`);
    })
})

