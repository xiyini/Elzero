let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(-++num, --num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(-++num, --num)); // ["Ahmed", "Elham", "Osama"];