/**
 * We declare variables with let and const
 * 
 * let is changeable, const is not(const stands for constant)
 * 
 * the basic datatypes are: string, number, boolean, array, object
 */

//a string
let name="Fred";

//a number
let age=8;

//a boolean can be true or false
let afraidOfDark = false;


//an object references items by a name and can hold all other data types
//objects use {} and have pairs with and name:value
const space = {isCold:false, planets:["Earth", "Mars","venus"], spacePenguinsFound:0}

//an array references items by their number and can hold all other data types
//arrays use []
const bodyParts = ["arms", 2, "legs", 2, "telepathic", false];
const people = [
    {name: 'Bob', nostrils:2, human: true, nickName:"Bobbert"},
    {name: 'Gary', nostrils:2, human: true, nickName:"Garbert"},
    {name: 'Ned', nostrils:3, human: true, nickName:"Nedbert"},
    {name: 'Bill', nostrils:4, human: true, nickName:"Billbert Bagins"}
]