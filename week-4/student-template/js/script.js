/*
1. First we'll declare variables for our text, time, position, etc.
2.Then we'll start our event listener. Everytime a key is pressed it will check if the key is a valid symbol or letter. It'll forward the key to handleKey(key) if it is, otherwise ignore it.
3.Every time handleKey(key) gets a character, it checks it against the text. If it's correct it increments the position in the text and changes the letter's color to green. Otherwise it changes it to red and sets a backspaceNeeded variable.
4. When the user is done typing, the handleEnd() function computes the results, changes the CSS display property, and modifies the HTML content.
*/

// TEMPLATE
let main = document.getElementById("main");
let textContainer = document.getElementById("text-container");
let resultsContainer = document.getElementById("results");
let wpmText = document.getElementById("wpm");
let accuracyText = document.getElementById("accuracy");
let timeText = document.getElementById("time");
// END OF TEMPLATE

const invalidKeys =
  "F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 Escape Tab CapsLock Shift Control Alt Meta ArrowLeft ArrowRight ArrowDown ArrowUp Enter".split(
    " "
  ); // create a JS array
const text =
  "Hello there! I really like monkeys, birds, and swimming. I don't really know how monkeys work because they are pretty confusing, but it is okay because I don't know how many things work in the world. Thank you so much for playing my typing test!";

const textArr = text.split(""); // ['H', 'e', 'l', ...]
