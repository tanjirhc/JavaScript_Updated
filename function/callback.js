// const arr = [1, 2, 3];

// let sum = 0;
// arr.forEach((v) => {
//   //console.log('Value ', v*v);
//   sum += v;
// });
// console.log(sum);

function toUpper(str, cb) {
  const upper = str.toUpperCase();
  cb(upper);
}

toUpper('Stack Learner', (str) => {
  console.log('Hello', str.length);
});