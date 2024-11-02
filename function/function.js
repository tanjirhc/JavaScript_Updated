const arr1 = [4, 6, 10, 3, 18, 23, 12];
const arr2 = [6, 11, 21, 4, 7, 27, 19];

// let max = arr1[0];
// for(let v of arr1) {
//   if (v > max) {
//     max = v;
//   }
// }
// console.log(max);

// let max2 = arr2[0];
// for(let f of arr2) {
//   if (f > max2) {
//     max2 = f;
//   }
// }
// console.log(max2);

function findMax(arr) {
  let max = arr[0];
  for(let v of arr) {
    if (v > max) {
      max = v;
    }
  }
  return max;
}

console.log(findMax(arr1));
console.log(findMax(arr2));