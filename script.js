"use strict";

let fullName = "Ray Auyeung";
console.log(fullName);

let myAge = "29";
console.log(myAge);

let myBirthday = "Febuary 28";
console.log(myBirthday);

const pineapplePizza = false;
console.log(pineapplePizza);

const lifeEvents = [
  "I was born in Sterling Heights, Michigan",
  "I went to Oakland University",
  "I participated in junior olympics when I was 10 years old",
  "I love to be in nature",
];
console.log(lifeEvents);

if (pineapplePizza === true) {
  console.log(
    "My name is " +
      fullName +
      " and I like pineapples on pizza. I am currently " +
      myAge +
      " years old and my birthday is on " +
      myBirthday +
      "."
  );
} else if (pineapplePizza === false) {
  console.log(
    "My name is " +
      fullName +
      " and I am not into pineapples on pizza. I am currently " +
      myAge +
      " years old and my birthday is on " +
      myBirthday +
      "."
  );
}

for (let i = 0; i < 4; i += 1) {
  console.log(lifeEvents[i]);
}

let counter = 0;
console.log(counter);
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
  if (randomNumber !== 5) {
    counter += 1;
    console.log(randomNumber + " !== 5");
  } else {
    counter += 1;
    console.log(
      "5 === 5. It took " +
        counter +
        " iterations to randomly generate the number 5"
    );
    break;
  }
}
