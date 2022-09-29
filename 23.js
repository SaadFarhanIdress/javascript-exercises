//
let x = 2;

if (!(x % 2)) {
  console.log(`${x} is even.`);
} else if (x % 2) {
  console.log(`${x} is odd.`);
}

//
let y = 9;
let j = 5;

if (y > j) {
  console.log("y is greater than j.");
} else if (y < j) {
  console.log("y is less than j.");
}

//
let doEat = true;
let doTakeOxygen = true;
let doDrinkWater = true;

if (doEat && doTakeOxygen && doDrinkWater) {
  console.log("You are a human");
} else {
  console.log("You are a robot")
}

//
let n = 5;
let c = 0;

for (i = 1; i <= n; i++) {
  if (n % i === 0) {
    c = c + 1;
  }
}

if (c === 2) {
  console.log(`${n} is a prime number.`)
} else {
  console.log(`${n} is not a prime number.`)
}

//
let day = "Saturday";

if (day.includes("Saturday", "Sunday")) {
  console.log("Today is holiday.");
} else {
  console.log("Go back to work!");
}

//
let timesDrankWater = 4;

if (timesDrankWater < 8) {
  console.log("You are drinking enough water!");
} else {
  console.log("You are not drinking enough water!");
}

//
let didEatBreakfast = false;

if (didEatBreakfast) {
  console.log("Happy to hear!");
} else {
  console.log("It is not good for you!");
}

//
let didSleepTomorrow = false;

if (didSleepTomorrow) {
  console.log("Happy to hear!");
} else {
  console.log("It is not good for you!");
}

//
let didMeetFriends = false;

if (didMeetFriends) {
  console.log("Happy to hear!");
} else {
  console.log("You should interact with them.");
}

//
let favoriteSubject = "Accounting";

if (favoriteSubject === "Statistics") {
  console.log("Nice!");
} else {
  console.log("Oh!");
}