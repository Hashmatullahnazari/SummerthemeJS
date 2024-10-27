//initialize variables 

let themeName = "Under the Sea";
let durationInDays = 5;
let activities = ["Coral Reef Exploration", "Shell Collecting", "Marine Biology"];

console.log("Initial Theme Plan:");
console.log("Theme Name:", themeName);
console.log("Duration (days):", durationInDays);
console.log("Activities:", activities.join(", "));
console.log("\n");

//update the theme name 

themeName = "Desert Adventure";

//Add new Activity

activities.push(" Sand Dune Climbing");



console.log("Updated Theme Plan:");
console.log("Theme Name:", themeName);
console.log("Duration (days):", durationInDays);
console.log("Activities:", activities.join(", "));
console.log("\n");


// Modify activities using array methods
activities.pop(); // Removes the last activity
activities.shift(); //Removes the first activity
activities.unshift("Cactus Exploration");//Adds an activity to the beginning

// Increase the duration of the theme 
//durationInDays = durationInDays + 2; 
durationInDays += 2; // Increment by 2 days

console.log("Final Theme Plan:");
console.log("Theme Name:", themeName);
console.log("Duration (days):", durationInDays);
console.log("Activities:", activities.join(", "));
console.log("\n");
