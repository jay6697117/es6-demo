let promise1 = new Promise((resolve, reject) => {
  // new Promise(executor);传递给 new Promise 的函数被称为 executor;当 new Promise 被创建，executor 会自动运行
  // 2 秒后发出工作已经被完成的信号，并带有结果 "done"
  setTimeout(() => resolve('done'), 1000);
});

let promise2 = new Promise((resolve, reject) => {
  // new Promise(executor);传递给 new Promise 的函数被称为 executor;当 new Promise 被创建，executor 会自动运行
  // 2 秒后发出工作已经被完成的信号，并带有结果 "done"
  setTimeout(() => reject(new Error('what the fuck!')), 2000);
});

promise1
  .then(res => {
    console.log('res :>> ', res);
  })
  .catch(err => {
    console.log('err :>> ', err);
  });

promise2
  .then(res => {
    console.log('res :>> ', res);
  })
  .catch(err => {
    console.log('err :>> ', err);
  });
