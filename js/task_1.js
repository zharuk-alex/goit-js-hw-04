function isEnoughCapacity(products, containerSize) {
  let sum = 0;
  for (const num of Object.values(products)) {
    sum += num;
  }

  return sum <= containerSize;
}

// function isEnoughCapacity(products, containerSize) {
//   return (
//     Object.values(products).reduce((acc, num) => (acc += num), 0) <=
//     containerSize
//   );
// }

console.log('task 1:');
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
