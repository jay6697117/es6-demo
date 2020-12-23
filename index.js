//练习题1.0
/*
let promise = new Promise(function (resolve, reject) {
  resolve(1);
  resolve之后不会执行任何代码
  setTimeout(() => resolve(2), 1000);
});
promise.then(res => console.log(res)); //1
*/
// 总结: 第二个对 resolve 的调用会被忽略，因为只有第一次对 reject/resolve 的调用才会被处理。进一步的调用都会被忽略。

//练习题2.0
/*
delay(2000).then(res => console.log('runs after 2 seconds :>> ' + res));
function delay(ms) {
  // return new Promise(resolve => {
  //   setTimeout(resolve, ms);
  // });

  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve();
  //   }, ms);
  // });

  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Promise执行了');
    }, ms);
  });
}
*/
