let i32a = new Int32Array([1, 2, 3, 4, 5]);
console.log('i32a :>> ', i32a);

const res = i32a.copyWithin(0, 2);
console.log('res :>> ', res);

const res1 = Array.prototype.copyWithin.call(i32a, 0, 2);
console.log('res1 :>> ', res1);
