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
// const text =
//   "Hello there! I really like monkeys, birds, and swimming. I don't really know how monkeys work because they are pretty confusing, but it is okay because I don't know how many things work in the world. Thank you so much for playing my typing test!";
const text = "hello world";

const textArr = text.split(""); // ['H', 'e', 'l', ...]

const htmlArr = textArr.map((item, index) => {
  if (item === " ") {
    return `<span class="space" id="span${index}">${item}</span>`;
  }
  return `<span class="char" id="span${index}">${item}</span>`;
}); // assign a different CSS class to spaces vs. characters
textContainer.innerHTML = htmlArr.join(""); // join the array into a string and display them onto the screen

// STATE
let errors = []; // stores mistakes made when typing
let firstTime = true; // check if this is the first letter the user typed
let currentPos = 0; // index that the user is in the `textArr` array
let backspaceNeeded = false; // tells program that a backspace needs to be typed to continue
let currentTime = 0; // current time user has used i nseconds
let repeat; // sets the interval for the timer

// Whenever the user presses a keydown
document.addEventListener("keydown", (event) => {
  // check the key the user pressed
  if (event.key === " ") {
    event.preventDefault();
  }
  if (firstTime) {
    firstTime = false;
    repeat = setInterval(() => currentTime++, 1000); // increments the current time every 1000 ms (1 sec)
  }
  if (event.location === 0 && !invalidKeys.includes(event.key)) {
    handleKey(event.key); // check that the user input was on the KEYBOARD and is not in one of the invalid keys
  }
});

function handleKey(key) {
  // Changes the color of the key
  let span = document.getElementById(`span${currentPos}`).style; // get the span element at the current position

  if (!backspaceNeeded) {
    if (key === textArr[currentPos]) {
      // if the key is correct
      span.color = "green";
      currentPos++;
    } else {
      // key is wrong
      if (textArr[currentPos] === " ") {
        span.backgroundColor = "red"; // changing bkg color for spaces
      } else {
        span.color = "red";
      }
      backspaceNeeded = true; // need a backspace to continue
      errors.push(textArr[currentPos]);
    }
  } else {
    if (event.key === "Backspace") {
      // if the user pressed backspace
      if (textArr[currentPos] === " ") {
        span.backgroundColor = "transparent";
      } else {
        span.color = "black";
      }
      backspaceNeeded = false;
    }
  }
  if (currentPos === textArr.length) {
    // if the user finished typing
    clearInterval(repeat);
    handleEnd();
  }
}

function handleEnd() {
  let wpm = Math.floor(textArr.length / 5 / (currentTime / 60)); // https://www.speedtypingonline.com/typing-equations
  let accuracy = Math.floor(
    ((textArr.length - errors.length) / textArr.length) * 100
  ); // accuracy based on how many errors were made

  wpmText.innerHTML = wpm;
  accuracyText.innerHTML = `${accuracy}%`;
  timeText.innerHTML = ` ${currentTime} s`;
  main.style.display = "none";
  resultsContainer.style.display = "block";
}
