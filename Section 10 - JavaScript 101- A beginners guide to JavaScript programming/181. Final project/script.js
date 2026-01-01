// step 1:
// fill in these three const by selecting the right nodes by their HTMLid's

const name = document.getElementById('name');
const age = document.getElementById('age');
const DogYears = document.getElementById('dogYears');

// step 2:
// set "name" and "age" in here
// example - node.innerText = "xyz"

name.innerText = 'sangamesh';
age.innerText = 29;

function showDogYears(age) {
  // step 3:
  // cast 'age' as number
  DogYears.innerText = age * 7;
  return Number(age) * 7;
}

// step 4:
// set the parameter of showDogYears()
DogYears.innerText = showDogYears(29);

// step 5:
// select all the .fake-input classes and give them the class of .real-input

const fakeInputs = document.querySelectorAll('fake-input');

fakeInputs.forEach((node) => {
  node.classList.add('real-input');
  node.classList.remove('fake-input');
});
