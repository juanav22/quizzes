/**
 * This quiz is to test your knowledge of Switch Statements.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Given a variable color with a value "red", use a switch statement to set a variable feeling to "passionate" for "red", "calm" for "blue", and "neutral" for other colors.
 */
const color = 'red';
let feeling;

switch (color) {
  case 'red':
    feeling = 'passionate';
    break;
  case 'blue':
    feeling = 'calm';
    break;
  default:
    feeling = 'neutral';
}
console.log('[Question #1]: ', feeling);
/**
 * Question 2
 * Using a switch statement, check the value of the variable day (e.g., "Monday"). Return "Working day" for weekdays and "Weekend" for Saturday and Sunday.
 */
const day = 'Monday';
let result;

switch (day) {
    case 'Saturday':
    case 'Sunday':
        result = 'Weekend';
        break;
    default: 
        result = 'Working day';
}
console.log('[Question #2]: ', result);

/**
 * Question 3
 * Given a variable score of 85, set a grade: "A" for 90 and above, "B" for 80-89, "C" for 70-79, "D" for 60-69, and "F" for below 60.
 */
const score = 85;
let grade;

switch (true) {
    case score >= 90:
        grade = 'A';
        break;
    case score >= 80 - 89:
        grade = 'B';
        break;
    case score >= 70-79:
        grade = 'C';
        break;
    case score >= 60-69:
        grade = 'D';
        break; 
    default:
        grade = 'F';
}
console.log('[Question #3]: ', grade);

/**
 * Question 4
 * Use a switch statement to determine if the variable fruit is a "berry". Set "berry" for strawberries, blueberries, and raspberries. "Not a berry" for other fruits.
 */
const fruit = 'blueberries';
let rlt;

switch (fruit) {
    case 'strawberries':
    case 'blueberries':
    case 'raspberries':
        rlt = 'berry';
        break;
    default:
        rlt = 'Not a berry';
}
console.log('[Question #4]: ', rlt);
/**
 * Question 5
 * Check the value of the variable month (e.g., "January") and return which quarter of the year it belongs to.
 */
const month = 'January';
let quarter;

switch (month) {
    case 'January':
    case 'February':
    case 'March':
        quarter = 'quater 1'
        break;
    case 'April':
    case 'May':
    case 'June':
        quarter = 'quater 2'
        break;
    case 'July':
    case 'August':
    case 'September':
        quarter = 'quater 3'
        break;
    case 'October':
    case 'November':
    case 'December':
        quarter = 'quater 4'
        break;
}
console.log('[Question #5]: ', quarter);
/**
 * Question 6
 * Use a switch statement to determine if a number is "small", "medium", or "large". Consider numbers 1-3 as "small", 4-6 as "medium", and 7-9 as "large".
 */
const number = 7;
let size;

switch (true) {
    case number >= 1 && number <= 3:
        size = 'small';
        break;
    case number >= 4 && number <= 6:
        size = 'medium';
        break;
    case number >= 7 && number <= 9:
        size = 'large';
        break;
}
console.log('[Question #6]: ', size);

/**
 * Question 7
 * Determine the type of the variable pet (e.g., "dog"). Return "Canine" for a dog, "Feline" for a cat, and "Unknown" for other pets.
 */
const pet = 'dog';
let petList;

switch (pet) {
  case 'dog':
    petList = 'Canine';
    break;
  case 'cat':
    petList = 'Feline';
    break;
  default:
    petList = 'Unknown';
}
console.log('[Question #7]: ', petList);
/**
 * Question 8
 * Given a variable transportMode with a value like "car", return "Fast" for "plane", "Medium" for "car", and "Slow" for "bicycle".
 */
const transportMode = 'car';
let speed;

switch (transportMode) {
    case 'plane':
        speed = 'Fast';
        break;
    case 'car':
        speed = 'Medium';
        break;
    case 'bicycle':
        speed = 'Slow';
        break;
}
console.log('[Question #8]: ', speed);
/**
 * Question 9
 * For a variable direction with values like "N", determine the full direction name. "N" for "North", "S" for "South", etc.
 */
const direction = 'N';
let directionName;

switch (direction) {
    case 'N':
        directionName = 'North';
        break;
    case 'S':
        directionName = 'South';
        break;
    case 'E':
        directionName = 'East';
        break;
}
console.log('[Question #9]: ', directionName);
/**
 * Question 10
 * Determine the type of drink based on the variable drink. "Water" for "H2O", "Coffee" for "C8H10N4O2", and "Unknown" for other values.
 */
const drink = 'beer';
let drinkType;

switch (drink) {
    case 'Water':
        drinkType = 'H2O';
        break;
    case 'Coffee':
        drinkType = 'C8H10N4O2';
        break;
    default:
        drinkType = 'Unknown';
}
console.log('[Question #10]: ', drinkType);