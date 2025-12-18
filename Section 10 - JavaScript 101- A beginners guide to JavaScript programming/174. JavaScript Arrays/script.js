lst = ['one', 2, 3.0, 'four', [], {}];

typeof lst;
// o/p - 'object'

const lst = ['one', 2, 3.0, 'four', [], {}];

lst.push('new item here');

lst;
// o/p - ['one', 2, 3, 'four', Array(0), {…}, 'new item here']0:

const newItem = lst.pop();

newItem;
// o/p - 'new item here'

lst;

// o/p-
// (6) ['one', 2, 3, 'four', Array(0), {…}]0: "one"1: 22: 33: "four"4: []5: {}length: 6[[Prototype]]: Array(0)
