name = 'sangamesh';
age = 30;

name;
// o/p - ('sangamesh');
age;
// o/p - 30;

'my name is ' + name + ' and my age is ' + age;
// o/p - ('my name is sangamesh and my age is 30');

// old way of string concatenation
'Hi my name is ' + name + ' and my age is ' + age;
// o/p - 'Hi my name is sangamesh and my age is 30'

// using string concatenation
`Hi my name is ${name} and my age is ${age}`;
// o/p - ('Hi my name is sangamesh and my age is 30');
