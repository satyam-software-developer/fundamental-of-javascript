/** Arrays in JS are Dynamic */

const cities = ["Mumbai", "Delhi", "calcutta", "Jaipur", "Chennai"];

console.log(cities.length);

cities[2] = "Kolkata";
console.log(cities);

/** Methods on Arrays */

/* Adding an Element */
//push

const teams = ["CSK", "RCB", "MI", "LSG"];
const pushArray = teams.push("GT"); // add end of the index
console.log(pushArray);

//unshift
teams.unshift("KKR"); // add start of the index
console.log(teams);

//** Removing an element */
//pop
teams.pop(); // delete end of the index
teams.pop();

console.log(teams);

//shift
teams.shift(); // delete start of the index
console.log(teams);

/** Check the element is present or not */
//indexOf()
const RCBIndex = teams.indexOf("RCB");
console.log(RCBIndex);
const gtIndex = teams.indexOf("GT");
console.log(gtIndex);

//icludes
const rcbIncludes = teams.includes("RCB");// find true and false of the value of that inddex which is icluded or not 
console.log(rcbIncludes);

//slice() and splice()
console.log(teams);
console.log(teams.slice(-1));// remove the element from starting of the Array of the index
console.log(teams);

//splice

teams.splice(1,1,"GT"); //syntax of splice: splice(index,delete,insert)
teams.splice(1,1,"GT","MI");
console.log(teams);

//concat();

const teams2 = ["India", "Austrailia", "New Zealand"]
const mergedTeams = teams.concat(teams2);// merged two or three arrays together
console.log(mergedTeams);


