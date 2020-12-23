// executor 只能调用一个 resolve 或一个 reject。任何状态的更改都是最终的。
// 所有其他的再对 resolve 和 reject 的调用都会被忽略：

let promise1 = new Promise((resolve, reject) => {
  // new Promise(executor);传递给 new Promise 的函数被称为 executor;当 new Promise 被创建，executor 会自动运行
  // resolve("done",'done1');
  resolve();
  reject(new Error('lalala')); // 被忽略
  setTimeout(() => resolve('hahaha')); // 被忽略
});

promise1
  .then(res => {
    console.log('res :>> ', res);
  })
  .catch(err => {
    console.log('err :>> ', err);
  });

// 这儿的宗旨是，一个被 executor 完成的工作只能有一个结果或一个 error。
// 并且，resolve/reject 只需要一个参数（或不包含任何参数），并且将忽略额外的参数。
