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

var w = 22;
var r = 211;
console.log(w === r);
// Else if practice
// var age = prompt("Enter your age");

// if (age >= 18) {
//   console.log("User is an adult...");
// } else {
//   console.log("User is underage...");
// }

// if (age >= 18) {
//   console.log("User is an adult...");
// } else if (age < 18) {
//   console.log("User is underage...");
// } else {
//   console.log("Enter a valid number");
// }

//Switch statement practice
// switch(expression){

// }

// var month = prompt("Enter a summer month");

// switch (month) {
//   case "June":
//     console.log("The first month of summer");
//     break;
//   case "July":
//     console.log("The middle month of summer");
//     break;
//   case "August":
//     console.log("The last month of summer");
//     break;
//   default:
//     console.log("It is not summer");
//     break;
// }

// Function expression
var getAreaRect = function (width, height) {
  return width * height;
};
console.log(`getAreaRect function expression: ${getAreaRect(2, 10)}`);

// Arrow function
const helloUSA = () => {
  return "Hello USA";
};
hello = () => {
  return "hello";
};
console.log(helloUSA);

multi = (x, y) => x * y;
let sum = (x, y) => x + y;

// alert(sum(1, 4)); //5

// let ask = (question, yes, no) => {
//     if (confirm (question)) yes()
//     else no();
// }

// Rewrite this as an arrow function!!!!

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );
/*
multiline comments
yah another line
omg another line
lets keep this line going!
ok nvm thats enough, lets get back to work.
*/
// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   "Do you agree?",
//   () => alert(" You agree."),
//   () => alert("You canceled the execution.")
// );
// var array = ["John", "Mike", "Adam", "Bob"];

// console.log(array);
// let deleteVar = array.pop();
// console.log(` Pop array method ${array.length}`);
// let array2 = [1, 2, 3, 4];
