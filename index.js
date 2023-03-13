new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve("promise resolvida");
        // if (Math.random() < 0.5) {
        // } else {
        //     reject("erro ao executar a promise");
        // }


    }, 1000);

}).then((data) => {
    console.log(data);

    return new Promise((resolve) => resolve("nova promise resolvida"));
}).then((data) => {
    console.log(data);
}).catch((erro) => {
    console.log(erro);
})