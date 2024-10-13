let themeName = "Autuman Escape";
let durationInDays = 5;
let activities = ['Leaf Peeping', 'Apple Picking', 'Hayrides'];

//Display Initial theme plan
console.log('Initial Theme Plan');
console.log('Theme Name:', themeName);
console.log('Duration (days):', durationInDays);
console.log('Activities:', activities.join(', '));
console.log('\n');

//Updated theme name

themeName = 'Spring Awakening';

//Add new activity 
activities.push('Flower Festival');

//Disply updated theme plan
console.log('Update theme plan');
console.log('Theme Name:', themeName);
console.log('Duration (days):', durationInDays);
console.log('Activities:', activities.join(', '));
console.log('\n');

//Modify activities using array method 
activities.pop(); //Removes the last activity
activities.shift(); //Remove the first activity
activities.unshift('Bird Watching'); //Add the activity to the beginning 


// Increase the duration of the theme
durationInDays += 2;  // Increment by 2 days

//Dispaly final theme plan
console.log('Final Theme Plan');
console.log('Theme Name:', themeName);
console.log('Duation (days):', durationInDays);
console.log('Activites:', activities.join(', '));











