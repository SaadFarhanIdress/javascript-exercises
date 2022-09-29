const natural_numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9
];

for (let x in natural_numbers) {
  if (natural_numbers[x] === 1) {
    natural_numbers[x] += "st";
  } else if (natural_numbers[x] === 2) {
    natural_numbers[x] += "nd";
  } else if (natural_numbers[x] === 3) {
    natural_numbers[x] += "rd";
  } else {
    natural_numbers[x] += "th";
  }
}

console.log(natural_numbers[0]);
console.log(natural_numbers[1]);
console.log(natural_numbers[2]);
console.log(natural_numbers[3]);
console.log(natural_numbers[4]);
console.log(natural_numbers[5]);
console.log(natural_numbers[6]);
console.log(natural_numbers[7]);
console.log(natural_numbers[8]);