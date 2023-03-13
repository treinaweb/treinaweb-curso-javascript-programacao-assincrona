const fs = require("fs");


function lerArquivo(caminho, callback) {
    fs.readFileSync(caminho, (erro, data) => {
        if (erro) {
            console.log(`Erro ao ler o arquivo: ${erro}`);
        } else {
            callback(data.toString());
        }
    });
}

lerArquivo("./arquivo.txt", (data) => {
    console.log(data);
});
