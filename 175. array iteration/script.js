const arr = ['zero', 'one', 'two', 'three', 'four', 'five'];
for (let i = 0; i < arr.length; i++) {
  console.log(i);
  console.log(arr[i]);
}

/*
o/p -
 0
 zero
 1
 one
 2
 two
 3
 three
 4
 four
 5
 five
*/

for (let i = 0; i < arr.length; i++) {
  console.log(i + ' ' + arr[i]);
}

/*
O/P -
0 zero
1 one
2 two
3 three
4 four
5 five
*/
