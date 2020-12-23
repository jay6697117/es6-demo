// console.log('Array.of(3, 11, 8) :>> ', Array.of(3, 11, 8));
// console.log('Array.of(3) :>> ', Array.of(3));
// console.log('Array.of(3).length; :>> ', Array.of(3).length);

function arrayOf() {
return Array.prototype.slice.call(arguments);
}

const res = arrayOf(1,2,3)
console.log('res :>> ', res);
