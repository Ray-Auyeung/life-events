"use strict";

// make an array of colors (string array)
const favColors = [
  "fuschia",
  "chartreuse",
  "aliceblue",
  "crimson",
  "forestgreen",
  "skyblue",
  "black",
];
console.log(favColors.length);

// iterate (loop) through array, log each color to the console

// for loop - provides us with a number
// helpful with a specific start and/or end
for (let index = 0; index < favColors.length; index++) {
  console.log(index); // i is a number that changes over time
  // values of 0, 1, 2, 3 for i with each loop
  console.log(favColors[index]); // chartreuse
  // bonus: include each color in a sentence ("I love ___")
  //   concatenation:
  console.log("I love " + favColors[index] + ".");
  //   template literal:
  console.log(`I love ${favColors[index]}.`);
}

console.log("----------------------------------------------");

// for ... of loop
// helpful if we need to access EVERY element in array/string
for (const favColor of favColors) {
  console.log(favColor);
  //   console.log(Math.random());
}
