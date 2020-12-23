// 1.Array.from的第一个参数指定了第二个参数运行的次数。
const arr = Array.from({ length: 2 }, () => 'jack')
console.log(Array.from({ length: 2 }));
console.log(arr);

/**
 * Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种 Unicode 字符，可以避* 免 JavaScript 将大于\uFFFF的 Unicode 字符，算作两个字符的 bug
 */

function realStrLen(param) {
  console.log(Array.from(param));
  return Array.from(param).length;
}

console.log(realStrLen('大\uD83D\uDE80好'));
console.log('大\uD83D\uDE80好'.length);
