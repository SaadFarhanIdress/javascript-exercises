const invitedPeople = [
  "Mustafa Ali Haider",
  "Huzaifa Irfan",
  "Grand Grand Mother"
];

console.log(`${invitedPeople[0]}, I invite you to eat dinner at my house.`);
console.log(`${invitedPeople[1]}, I invite you to eat dinner at my house.`);
console.log(`${invitedPeople[2]}, I invite you to eat dinner at my house.\n`);

console.log('I can invite three more.\n');

invitedPeople.unshift("Khwaja Mustafa");

invitedPeople.push("Sir Mairaj");

console.log(`${invitedPeople[0]}, I invite you to eat dinner at my house.`);
console.log(`${invitedPeople[1]}, I invite you to eat dinner at my house.`);
console.log(`${invitedPeople[2]}, I invite you to eat dinner at my house.`);
console.log(`${invitedPeople[3]}, I invite you to eat dinner at my house.`);
console.log(`${invitedPeople[4]}, I invite you to eat dinner at my house.\n`);

console.log("I only have space for 2 guests.\n");

console.log(`Sorry ${invitedPeople[4]}`)
invitedPeople.pop();

console.log(`Sorry ${invitedPeople[3]}`)
invitedPeople.pop();

console.log(`Sorry ${invitedPeople[2]} \n`)
invitedPeople.pop();

console.log(`${invitedPeople[0]}, You are still invited.`);
console.log(`${invitedPeople[1]}, You are still invited.`);

console.log(`${invitedPeople.length} guests are invited.`)
