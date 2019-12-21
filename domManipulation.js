/**
 * DOM stands for Document Object Model
 * it is javascripts way of reading and writing HTML
 */

/**
 * we can grab multiple pieces of html with querySelectorAll with css queries
 */
let allTitles = document.querySelectorAll("h1, h2");
console.log(allTitles);

/**
 * we can grab single pieces with querySelector
 */
let justH1 = document.querySelector("h1");
console.log(justH1);

/**
 * We can also append new html onto a page with appendChild
 */

 //first we grab what we want to add to
let pageBody = document.querySelector("body");
//then we can add create new elements with createElement
let newTitle = document.createElement("h2");
//we an even change what the contents of the new element are with inner HTML
newTitle.innerHTML = "Thingies and Stuff";
//finally we can add it to the page with appendChild
pageBody.appendChild(newTitle);
//if we want, we can change the style too with style.styleToChange
newTitle.style.color = "blue";
newTitle.style.fontSize = "2em";

//finally if we want to remove something we can use removeElement
let badTitle = document.querySelector("h6");
badTitle.remove();
