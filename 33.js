const ordinal_numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9
];

for (let x in ordinal_numbers) {
  if (ordinal_numbers[x] === 1) {
    ordinal_numbers[x] += "st";
  } else if (ordinal_numbers[x] === 2) {
    ordinal_numbers[x] += "nd";
  } else if (ordinal_numbers[x] === 3) {
    ordinal_numbers[x] += "rd";
  } else {
    ordinal_numbers[x] += "th";
  }
}

console.log(ordinal_numbers[0]);
console.log(ordinal_numbers[1]);
console.log(ordinal_numbers[2]);
console.log(ordinal_numbers[3]);
console.log(ordinal_numbers[4]);
console.log(ordinal_numbers[5]);
console.log(ordinal_numbers[6]);
console.log(ordinal_numbers[7]);
console.log(ordinal_numbers[8]);