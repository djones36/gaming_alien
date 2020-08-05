console.log("Test of external Javascript file");

var num1 = 10;
var num2 = 20;

console.log(num1 + num2);

var value = "Dogman"; // string saved

console.log(value);

var name = "John";

console.log("+ to combine two string vars " + name + " " + value);
console.log(`Practicing string literals with backticks ${name} ${value}`);

//String.concat method - lets see how slow we can make javascript!
var aString = " ";

console.log(
  `concat value and name with aString for the space: ${value.concat(
    aString,
    name
  )}`
);

const num3 = num2 + num2;
console.log(num3);
