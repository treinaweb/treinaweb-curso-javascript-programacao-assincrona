const myPromise = Promise.resolve(77);

const newPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(500);
    }, 1000)
});

Promise.all([myPromise, newPromise])
    .then((promises) => {
        console.log(promises);
    });

// Promise.race([myPromise, newPromise])
//     .then((data) => {
//         console.log(data);
//     });

