const usernames = [
  "sweet_kristy",
  "kristy_honey",
  "bubbly_snowflake",
  "angelic.princess.kristy",
  "admin",
  "fairy.princess.kristy",
  "baby_kristy_butterfly",
];

for (let x in usernames) {
  if (usernames[x] === "admin") {
    console.log(`Hello ${usernames[x]}, would you like to see a status report?`)
  } else {
    console.log(`Hello ${usernames[x]}, thank you for logging in again.`)
  }
}

usernames.splice(0, usernames.length);

if (!usernames.length) {
  console.log("We need to find some users!");
}