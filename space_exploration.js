// Initialize variables
let themeName = "Space Exploration";
let durationInDays = 5;
let activities = ["Rocket Launch", "Star Gazing", "Planetarium Visit"];

// Display initial theme plan
console.log("Initial Theme Plan:");
console.log("Theme Name:", themeName);
console.log("Duration (days):", durationInDays);
console.log("Activities:", activities.join(", "));
console.log("\n");

// Update the theme name
themeName = "Forest Adventure";

// Add a new activity
activities.push("Nature Walk");

// Display updated theme plan
console.log("Updated Theme Plan:");
console.log("Theme Name:", themeName);
console.log("Duration (days):", durationInDays);
console.log("Activities:", activities.join(", "));
console.log("\n");



// Modify activites using array methods 

activities.pop(); //Removes the last activity 
activities.shift(); // Remove the first activity
activities.unshift("Birds Watching"); // Adds an activity to the beginning



// Display final theme plan
console.log("Final Theme Plan:");
console.log("Theme Name:", themeName);
console.log("Duration (days):", durationInDays);
console.log("Activities:", activities.join(", "));
























