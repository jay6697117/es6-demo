const arrlike = { 0: 'a', 1: 'b', 2: 'c', length: 4 };

const arrtrue = Array.from(arrlike);
console.log('arrtrue :>> ', arrtrue);

const arrtrue1 = Array.prototype.slice.call(arrlike);
console.log('arrtrue1 :>> ', arrtrue1);

//toArray 函数
const toArray = param => {
  return Array.from ? Array.from(param) : Array.prototype.slice.call(param);
};
console.log('toArray(arrlike) :>> ', toArray(arrlike));

const arrlike1 = [1, 2, 3];
const arr = Array.from(arrlike1, x => x * x);
console.log('arr :>> ', arr);
const arr1 = Array.from(arrlike1).map(item => item * item);
console.log('arr1 :>> ', arr1);

const res1 = Array.from([1, , 2, , 3], n => n || 0);
console.log('res1 :>> ', res1);

function typesOf(...param) {
  console.log('param :>> ', param); //arr
  console.log('arguments :>> ', arguments); //obj
  console.log('arguments1 :>> ', [...arguments]); //obj
  console.log('arguments2 :>> ', Array.from(arguments)); //obj
  return Array.from(arguments, value => typeof value);
}
console.log('typesOf :>> ', typesOf(1, '2', false));
