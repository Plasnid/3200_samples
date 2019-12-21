//Arrays have methods(functions) to help sort, find, add and remove data
//filter: filters for finding specific entries, and they return arrays
let twoNostrils = people.filter(person => person.nostrils==2);

//sort lets us sort by different values, this also returns an array
let sortedPeople = people.sort((a, b) => a.nostrils - b.nostrils);
console.log(sortedPeople);

//some tells us if some of the entries look like what we are checking for
//some returns true or false
//duals will return true
let duals = people.some(person => person.nostrils==2);
console.log(duals);
//hexa will be false, because no one in the array has 6 nostrils
let hexa = people.some(person => person.nostrils==6);
console.log(hexa);

//every tells us if every member of an array has the same value
//lets check if everyone in the array is human

let allHuman = people.every(person => person.human==true);
console.log(allHuman);

//push lets us add to an array
people.push({name:"Bruce", nostrils:2, human: true, nickName:"Brucebert"});
console.log(people);

//forEach lets us iterate through an array(do something to an array, one element at a time)
people.forEach(person => {
    console.log(`I am a person named ${person.name}`);
})