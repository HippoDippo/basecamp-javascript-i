// #1 create a variable called 'myName' and assign it to your name as a string.

var myName = 'Kaycee';

// #2 create a variable called 'iLoveCode' and assign it the value of 'myName' + loves code as a string.

var iLoveCode = (myName + ' loves code');

// ARROW FUNCTIONS
// #3 using the arrow syntax, create a function called 'wildNameReturn' that takes in variable as a parameter. Return the variable inside of the function with the word 'wild' in front so it returns "wild Bryan" and then invoke wildNameReturn using the 'myName' variable you created as an argument.

var wildNameReturn = (name) => {
  return 'wild ' + name;
};

wildNameReturn(myName);

// #4 using the arrow syntax, create a function called 'sum' that takes in a number and returns that number added to itself.

var sum = (num) => {
  return num + num;
};

// #5 using the arrow syntax, create a function called 'greeter' that takes in two parameters, name & age. greeter should return a string like this "Hi, I'm Bryan and I am 27 years old." but replacing the name and age with the passed in values. The test on this question is very strict on casing and punctuation.

var greeter = (name, age) => {
  return (`Hi, I'm ${name} and I am ${age} years old.`);
};

// #6 using the arrow syntax, create a function called 'animalSounds'. animalSounds takes three parameters: name, sound and a callback. animalSound should return something like this "I am wild Bryan. Hear me woof." when invoked using the wildNameReturn function you previously created as the callback.

var animalSounds = (name, sound, callback) => {
  return (`I am ${callback(name)}. Hear me ${sound}.`);
};

// CALLBACKS
// Here we will write a function that takes in a callback as a parameter. You must write the callback function to make the existing function work properly.
// EXAMPLE
// You would create the sayHi function here
var sayHi = (str, callback) =>{
  callback(str);
 }
// So you can use it down here
 sayHi('Hi Lindsey', thingToSay =>{
    alert(thingToSay); //should alert ('Hi Lindsey')'
 });
 // You can comment out the above code so it doesn't run every time you refresh your page.

// #7 using the arrow syntax, write a function called 'first' that returns the first item of the array
var names = ['Bryan', 'Jeremy', 'Joe', 'Megan', 'Ian', 'Taylor'];

var first = (arr, callback) => {
  callback(arr[0]);
};

first(names, firstName => {
  console.log(`The first name in names is ${firstName}`);
  return firstName;
});

// #8 using the arrow syntax, write a function called 'multiply' that multiplies two numbers. Invoke the callback with the result of the multiplication.

var multiply = (num1, num2, callback) => {
  var result = num1 * num2;
  callback(result);
};

multiply(4,3, answer => {
  console.log(`the answer is ${answer}`)
});

// #9 using the arrow syntax, write a function called 'last' that returns the last name in the previously crated names array using a callback function.

var last = (arr, callback) => {
  callback(arr[arr.length-1]);
};

last(names, lastName =>{
  console.log(`The last name in names is ${lastName}`);
  return lastName;
});

// #10 using the arrow syntax, write a function called 'sizer' that returns the larger of two numbers that are passed in using a callback function.

var sizer = (num1, num2, callback) => {
  var greater;
  if (num1 > num2)
    greatest = num1;
  else
    greatest = num2;

  callback(greatest);
};

sizer(300, 33, bigger => {
  console.log(`${bigger} is the larger number`);
  return bigger;
});


// METHODS ON ARRAYS
var friends = ['Cam', 'Corey', 'Landy'];

// #11 add the name 'Harry' to the end of the friends array

friends.push('Harry');

// #12 assign 'shortNames' the return value of any names shorter than four characters from the friends array

var shortNames = friends.filter(friend => friend.length < 4);

// #13 here we have created a NickNameMaker function that will shorten names to the beginning two Characters so 'Cam' will be 'CaCa. Using the nickNameMaker function, map over the previously created friends array to return the friends nick names and assign it to 'shorty'.

var nickNameMaker = (name) => {
  return name.split('').slice(0,2).join('') + name.split('').slice(0,2).join('');
}

var shorty = friends.map(friend => nickNameMaker(friend));

// #14 assign 'evens' the return value of even numbers from the numbers array
var numbers = [1, 25, 6, 88, 47, 77, 333, 500];

var evens = numbers.filter(num => num % 2 === 0);

// #15 using the previously created numbers array, map over each number and add 3 to it and assign it to 'plusThree'.

var plusThree = numbers.map(num => num + 3);

// #15 using the 'goodPeople' array of objects, add a new key value pair of 'family: true' to each object. Hint: use forEach
var goodPeople = [{name: 'George'}, {name: 'Randi'}, {name: 'Lindsey'}]

goodPeople.forEach(person => {
  person.family = true;
});

console.log(goodPeople);