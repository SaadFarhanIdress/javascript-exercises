const magicians = [
  "Harry Houdini",
  "Paul Daniels",
  "Penn and Teller",
  "Derren Brown",
  "Criss Angel"
];

function show_magicians(m) {
  return console.log(m);
}

for (let i in magicians) {
  show_magicians(magicians[i]);
}

const great_magicians = [];

function make_great() {
  for (let i in magicians) {
    great_magicians[i] = `The Great ${magicians[i]}`;
  }
}

make_great();

for (let i in magicians) {
  show_magicians(magicians[i]);
}

for (let i in great_magicians) {
  show_magicians(great_magicians[i]);
}