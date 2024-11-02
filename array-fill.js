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
for (let i=0; i < response.length; i++) {
  const rand = Math.floor(Math.random() * 10 + 1);
  response[i] = rand > 5 ? 'X' : 'O';
}
console.log(response);

// Array is mutable
function update(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${i + 1}. ${arr[i]}`;
  }
  return arr;
}

update(names);
console.log(names);