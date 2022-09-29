const age = 17;
let stage;

if (age < 2) {
  stage = "baby";
} else if (age === 2 || age < 4) {
  stage = "toddler";
} else if (age === 4 || age < 13) {
  stage = "kid";
} else if (age === 13 || age < 20) {
  stage = "teenager";
} else if (age === 20 || age < 65) {
  stage = "adult";
} else if (age >= 65) {
  stage = "elder";
}

console.log(stage);