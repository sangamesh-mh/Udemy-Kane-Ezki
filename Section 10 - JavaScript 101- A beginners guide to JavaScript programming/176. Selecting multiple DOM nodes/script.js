// const elems = document.querySelectorAll('.this-class');
// console.log(elems);

const elements = document.querySelectorAll('li');
// console.log(elements);

// elements.forEach((LI) => {
//   //   console.log(LI.innerText);
//   LI.innerText = 'this is changed!!';
// });

elements.forEach((LI, INDEX) => {
  LI.innerText = `Hello, this is item no ${INDEX + 1}`;
});

elements.forEach((LI) => {
  LI.classList.add('custom-class', 'second-class');
});
