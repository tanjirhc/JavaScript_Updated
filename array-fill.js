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
//console.log(arr2);

const names = ['Nayem', 'Shegufta', 'Salvy'];
names[0] = 'HM Nayem';
names[1] = 'Shegufta Taranjum'
//console.log(names);

// Fill array and Update
const response = new Array(9);
response.fill(undefined);
console.log(response);