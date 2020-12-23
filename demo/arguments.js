// arguments对象
function foo(p1, p2, p3) {
  return arguments;
}
const res = foo(1, 2, 3);
console.log('res :>> ', res);

// arguments对象1
function foo1(p1, p2, p3) {
  return Array.from(arguments);
}
const res1 = foo1(4, 5, 6);
console.log('res1 :>> ', res1);

// arguments对象1
function foo2(p1, p2, p3) {
  return [...arguments];
}
const res2 = foo2(7, 8, 9);
console.log('res2 :>> ', res2);
