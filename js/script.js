//PART 1
// Somebody Else's code

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const isUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;
console.log(`----------`);
console.log(`Part One!`);
console.log(`----------`);
// Finally, log the results.
console.log(`The four numbers are valid according to the provided criteria: ${isValid}`);
//console.log(isValid); //Old code, Not pretty

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Code for me!
// Lets make an array for the numbers so I can scale if needed
let numbers = [10,15,20,5];
//Lets find out if they are Modular 5
let modFive = true; //Assume True
let x = 0; //Make a value to increment

//Check each number in the array until I run out of numbers
//If any of them are false, the whole thing is false
//otherwise, it was true the whole time.
while(modFive && numbers[x]!=null) {
    if(numbers[x]%5 == 0){
        x++
    }
    else{
        modFive = false;
    }
}
if(modFive) {
    console.log(`All numbers are divisible by 5!`);
}
else {
    console.log(`All numbers are NOT divisible by 5!`);
}
let firstBigger = (numbers[0] > numbers[-1]); //Is the first number bigger than the last number?
if(firstBigger) {
    console.log(`The first number is Bigger than the last!`);
}
else {
    console.log(`The first number is NOT Bigger than the last!`);
}
let mathProblem = ((numbers[1]-numbers[0])*numbers[2])%numbers[3]; // A big math problem
console.log("The answer to the math problem is: "+mathProblem); //Displays the result

//PART 2
console.log(`----------`);
console.log(`Part Two!`);
console.log(`----------`); //Displays the result
/*
Part 2: Practical Math
Let’s look at a more practical scenario.
You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?
Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
Log the results of your calculations using string concatenation or template literals.
*/
const totalDistance = 1500;
const fe55 = 30; //30 Miles per Gallon @ 55 Miles per Hour
const fe60 = 28; //28 Miles per Gallon @ 60 Miles per Hour
const fe75 = 23; //23 Miles per Gallon @ 60 Miles per Hour
const budget = 175;
const price = 3; // Dollars per Gallon
//Let's start at 55

// How many gallons of fuel will you need for the entire trip?
let fuelNeeded = totalDistance / fe55;
//console.log(`The trip requires ${fuelNeeded} gallons of fuel.`); // 50
// Will your budget be enough to cover the fuel expense?
let dollarsPerTrip = fuelNeeded * price;
//console.log(`The trip will cost $${dollarsPerTrip} at 55 mph.`);
let inBudget = (dollarsPerTrip <= budget);
//console.log("The trip is in budget for 55 mph: "+inBudget); // True
// How long will the trip take, in hours?
let timeTrip = totalDistance / 55;
//console.log(`The trip will take ${timeTrip} hours.`); //27.272727


//I want to make this better, with modular options
let fuel = [
    [55, 30],
    [60, 25],
    [75, 23],
 ];
for(let x=0;x<3;x++) {
    fuelNeeded = totalDistance / fuel[x][1];
    console.log(`The trip requires ${fuelNeeded} gallons of fuel.`);
    dollarsPerTrip = fuelNeeded * price;
    inBudget = (dollarsPerTrip <= budget);
    console.log(`The trip will cost $${dollarsPerTrip} at ${fuel[x][0]} mph.`);
    console.log(`The trip is in budget for ${fuel[x][0]} mph: ${inBudget}`);
    timeTrip = totalDistance / fuel[x][0];
    console.log(`The trip will take ${timeTrip} hours.`);
    console.log(`----------`)
}
/*
Part 3: Future Exploration
In all of the problems above, there are two tools that would make it much easier to implement the logic we need and to reuse the code to test with different values:
Control flow, which is how we conditionally determine what a program does next. For example, if we exceed our fuel budget, perhaps the program could automatically change the speed it is testing until it finds the optimal speed.
Functions, which are reusable blocks of code, allow us to run pieces of code multiple times without rewriting the code or changing the value of variables in the code itself, like we needed to do above.
We will explore control flow in the next lesson, and functions toward the end of the module. Until then, continue exploring with the variety of operators and data types available in JavaScript!
*/
console.log(`Part Three!`);
console.log(`----------`);
// Oh. I thought there was going to be more here.