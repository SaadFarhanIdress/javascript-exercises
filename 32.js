const current_users = [
  "Sweet_Kristy",
  "kristy_honey",
  "baby_kristy_butterfly",
  "Iron_MErc",
  "steel.titan"
];

const new_users = [
  "baby_kRisty_Butterfly",
  "Iron_Merc",
  "crash.tv",
  "blaxe-assault",
  "toxic_headshot"
];

for (x in new_users) {
  if (current_users.map(usr => usr.toLowerCase()).includes(new_users[x].toLowerCase())) {
    console.log(`${new_users[x]} is not available.`);
  } else {
    console.log(`${new_users[x]} is available.`)
  }
}