function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                nome: "ariel",
                idade: 29
            }
            // resolve(data);
            reject("erro inesperado");
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            data.idade *= 2;
            resolve(data);
        }, 1000);
    });
}

async function displayData() {
    try {
        const data = await getData();
        const processedData = await processData(data);

        console.log(processedData);
    } catch (error) {
        console.log(error);
    }

}

displayData();

