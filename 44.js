function make_sandwich(items) {
  for (let i in items) {
    console.log(`The customer wants ${items[i]} on his sandwich.`)
  }
}

make_sandwich([
  "bread",
  "tomato",
  "cheese",
  "fried chicken"
]);

make_sandwich([
  "bread",
  "cheese",
  "fried chicken",
  "ketchup"
]);

make_sandwich([
  "garlic bread",
  "cheese",
  "fried chicken",
  "ketchup",
  "mayo"
]);