const arr1 = Array.from([1, , 2, , 3], n => n || 0);
const arr2 = Array.from([1, , 2, , 3]).map(n => n || 0);
console.log('arr1 :>> ', arr1);
console.log('arr2 :>> ', arr2);
