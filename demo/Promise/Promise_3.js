let promise1 = new Promise((resolve, reject) => {
  // new Promise(executor);传递给 new Promise 的函数被称为 executor;当 new Promise 被创建，executor 会自动运行
  setTimeout(() => {
    // resolve();
    resolve('done!');
    // reject();
    // reject(new Error('what the fuck!'));
  }, 2000);
});

// finally 并不是意味着要处理 promise 的结果。所以它将结果传递了下去。
promise1
  .finally(() => {
    console.log('Promise ready');
  })
  .then(res => {
    console.log('res :>> ', res);
  })
  .catch(err => {
    console.log('err :>> ', err);
  });
