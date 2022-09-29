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

function make_great() {
  for (let i in magicians) {
    magicians[i] = `The Great ${magicians[i]}`;
  }
}

make_great();

for (let i in magicians) {
  show_magicians(magicians[i]);
}