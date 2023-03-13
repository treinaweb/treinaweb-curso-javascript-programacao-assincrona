const BASE_URL = "http://localhost:3002";

function getUser() {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}/api/user`, {
            method: "GET"
        }).then((response) => {
            resolve(response.json());
        }).catch(() => {
            reject("erro inesperado");
        });
    })
}

getUser().then((data) => {
    console.log(data);
})