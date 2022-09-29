// #1
const x = "sAaD";
const y = "Saad";

if (x === y) {
  console.log("x is exactly same as y.")
} else {
  console.log("x is not same as y.")
}

const gender = "male";

if (gender === "male") {
  console.log("You are a male person.");
} else {
  console.log("You are a female person.");
}

// #2
const person = "SAad";

if (person.toLowerCase() === "saad") {
  console.log("The person's name is equal to saad");
} else {
  console.log("The person's name is not equal to saad");
}

const friend = "Mustafa";

if (friend.toLowerCase() === "mustafa") {
  console.log("Happy to hear!");
} else {
  console.log("You should befriend with him");
}

// #3
const age = 18;

if (age < 2) {
  console.log("You are a baby.");
} else if (age > 2) {
  console.log("You are a child.");
} else if (age <= 10) {
  console.log("You are a teen.");
} else if (age >= 18) {
  console.log("You are an adult.")
}

const o = 18;

if (o > 30) {
  console.log("Your weight is greater than 30.");
} else if (o < 30) {
  console.log("Your weight is less than 30.");
} else if (o <= 60) {
  console.log("You weight is 60 or less than 60.");
} else if (o >= 90) {
  console.log("You weight is 90 or greater than 60.");
}

// #4
const p = 40;
const canRun = 20;

if (p < 50 && canRun > 15) {
  console.log("You are doing great!")
} else if (p < 50 || canRun > 15) {
  console.log("Don't worry!")
}

const house = true;
const clothes = true;
const food = true;
const water = true;
const time = true;
const success = false;

if (success || time && house && clothes && food && water) {
  console.log("Thank God!");
} else {
  console.log("Please help God!")
}

// #5
const presentees = [
  "Oliver",
  "Jack",
  "Harry",
  "Charlie",
  "Thomas",
  "George",
  "Daniel",
  "Oscar",
  "James"
];

for (let i = 0; i < presentees.length; i++) {
  if (presentees[i] === "Daniel") {
    console.log("Daniel is present.")
  }
}

const favDishes = [
  "Meatball",
  "Biryani",
  "Chicken tikka masala",
  "Fish and Chips",
  "Water",
  "Macaroni"
];

for (let i = 0; i < favDishes.length; i++) {
  if (favDishes[i] === "Water") {
    console.log("Water is not a dish.")
  }
}

// #6

const bestFriends = [
  "Mustafa AliHaider",
  "Khwaja Mustafa",
  "Fakhir Sabir",
  "Khizer Hayat"
];

for (let i = 0; i < bestFriends.length; i++) {
  if (bestFriends[i] !== "Umer Farooq") {
    bestFriends.unshift("Umer Farooq");
    console.log(`${bestFriends[0]} added!`);
    break;
  }
}

const asianCountries = [
  "South Korea",
  "Mongolia",
  "Malaysia",
  "Kuwait",
  "India",
  "China"
];

for (let i = 0; i < asianCountries.length; i++) {
  if (asianCountries[i] !== "Srilanka") {
    asianCountries.unshift("Srilanka");
    console.log(`${asianCountries[0]} added!`);
    break;
  }
}