function returnIsEven() {
  const isEven = (n) => n % 2 === 0;
  return isEven;

}

const isEven = returnIsEven();
console.log(isEven(50));