// Initialize theme plan variables
let themeName = "Summer Fun";
let durationInDays = 7;
let activities = ["Beach Volleyball", "Surfing", "Sandcastle Building"];

// Display initial theme plan 
console.log("Initial Theme Plan:");

console.log("Theme Name:", themeName);

console.log("Duration (days):", durationInDays);

console.log("Activities:", activities.join(", "));

// Update theme name and add a new activity 
themeName = "Tropical Adventure";

activities.push("Snorkeling");

// Display update theme plan
console.log("\nUpdated Theme Plan:");

console.log("themeName:", themeName);

console.log("Duration (days):", durationInDays);

console.log("Activities:", activities.join(", "));

console.log("\nUpdated Theme Plan:");

// Increase duration and modify activities list
durationInDays += 3;
activities.unshift("Hiking");
activities.shift();
activities.pop();


// Display final theme plan

console.log("\nFinal Theme Plan:");

console.log("Theme Name:", themeName);
console.log("Duration (days)", durationInDays);
console.log("Activities:", activities.join(", "));




