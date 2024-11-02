const arr1 = [4, 6, 10, 3, 18, 23, 12];
const arr2 = [6, 11, 21, 4, 7, 27, 19];

let max = arr1[0];
for(let v of arr1) {
  if (v > max) {
    max = v;
  }
}
console.log(max);