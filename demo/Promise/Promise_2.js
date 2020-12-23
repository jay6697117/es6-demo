let promise1 = new Promise((resolve, reject) => {
  // new Promise(executor);传递给 new Promise 的函数被称为 executor;当 new Promise 被创建，executor 会自动运行
  setTimeout(() => {
    // resolve();
    // resolve('done!');
    // reject();
    reject(new Error('what the fuck!'));
  }, 2000);
});

// promise1
//   .then(
//     res => {
//       console.log('res :>> ', res);
//     },
//     err => {
//       console.log('err :>> ', err);
//     }
//   )
//   .finally(() => {
//     console.log('finally...');
//   });

// promise1
//   .then(res => {
//     console.log('res :>> ', res);
//   })
//   .then(null, err => {
//     console.log('err :>> ', err);
//   })
//   .finally(() => {
//     console.log('finally...');
//   });

// // .catch(f) 调用是 .then(null, f) 的完全的模拟，它只是一个简写形式。
// promise1
//   .then(res => {
//     console.log('res :>> ', res);
//   })
//   .catch(err => {
//     console.log('err :>> ', err);
//   })
//   .finally(() => {
//     console.log('finally...');
//   });

// .catch(f) 调用是 .then(null, f) 的完全的模拟，它只是一个简写形式。
promise1
  .finally(() => {
    console.log('finally...');
  })
  .then(res => {
    console.log('res :>> ', res);
  })
  .catch(err => {
    console.log('err :>> ', err);
  });
