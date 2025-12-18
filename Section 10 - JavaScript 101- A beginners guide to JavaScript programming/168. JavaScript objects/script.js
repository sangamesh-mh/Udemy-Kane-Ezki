let person = {};

console.log('type of person is ' + typeof person);

person = {
  name: 'sangamesh',
  age: 30,
  profession: 'programming',
  favFoods: ['momos', 'chole bature', 'finger chips'],
};

console.log(person['age']);
console.log(person['name']);

// why use objects ?

const cat = {
  name: 'kami',
  words: 'meow',
  age: 6,
  work: 'napping',
};

console.log(cat['name']);
console.log(cat['work']);
