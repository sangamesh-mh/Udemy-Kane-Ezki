function addNumbers(num1, num2) {
  const total = Number(num1) + Number(num2);
  return total;
}

const addedTotal = addNumbers(1, 9);

// ggreetings function

function greetings(name) {
  console.log(`Hello there !!! ${name}`);
}

greetings('kaami');

// o/p -
// Hello there !!! kaami

greetings('veeresh');

// o/p -
// Hello there !!! veeresh

addNumbers('1', '9.123');

// o/p -
// '19.123'

// so, basically we have to convert strings into numbers

// o/p -
// '10.123'

/*

addNumbers
ƒ addNumbers(num1, num2) {
  const total = Number(num1) + Number(num2);
  return total;
}
typeof(addNumbers)
'function'
typeof(addNumbers(1, 9))
'number'
typeof(10)
'number'


*/
