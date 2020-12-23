// const arr = [1, 2, 3, 4, 5];
// const arr = [1, 2, 10, 4, 5];

// const firstVal = arr.find(function (item, index, arr) {
//   console.log('find item :>> ', item);
//   console.log('find index :>> ', index);
//   console.log('find arr :>> ', arr);
//   console.log('---------');
//   return item > 5;
// });
// console.log('结果firstVal :>> ', firstVal);

// console.log('------------------------------');
// const firstIndex = arr.findIndex(function (item, index, arr) {
//   console.log('findIndex item :>> ', item);
//   console.log('findIndex index :>> ', index);
//   console.log('findIndex arr :>> ', arr);
//   console.log('---------');
//   return item > 5;
// });
// console.log('结果firstIndex :>> ', firstIndex);

// const person = { name: 'John', age: 20 };
// const result = [10, 12, 26, 15].find(function (item, index, arr) {
//   console.log('item :>> ', item);
//   console.log('index :>> ', index);
//   console.log('arr :>> ', arr);
//   console.log('this :>> ', this);
//   return item > this.age;
// }, person);
// console.log('result :>> ', result);

const res = [1, 2, NaN].findIndex(function (item, index, arr) {
  //   console.log('item :>> ', item);
  //   console.log('index :>> ', index);
  //   console.log('arr :>> ', arr);
  return Object.is(NaN, item);
});
console.log('res :>> ', res);

const res1 = [1, 2, NaN].find(function (item, index, arr) {
  //   console.log('item :>> ', item);
  //   console.log('index :>> ', index);
  //   console.log('arr :>> ', arr);
  return Object.is(NaN, item);
});
console.log('res1 :>> ', res1);
