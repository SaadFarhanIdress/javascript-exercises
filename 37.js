function make_shirt(size = "large", text = "I love JavaScript.") {
  return console.log(`The shirt will be of ${size} size, and will have "${text}" written on it.`);
}

make_shirt();

make_shirt("medium");

make_shirt("large", "Hello, World!")