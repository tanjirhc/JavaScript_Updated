/*
! Article: Array fill Manual way
*/

const arr = new Array(10);
for (let i=0; i < arr.length; i++) {
  arr[i] = false;
}
//console.log(arr);

// Array Fill
const arr2 = new Array(10);
arr2.fill(0);
console.log(arr2);

const names = ['']