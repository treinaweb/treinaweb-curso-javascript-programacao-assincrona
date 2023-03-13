function getData(callback) {
    setTimeout(() => {
        const data = {
            nome: "ariel",
            idade: 29,
        }
        callback(data);
    }, 1000)
}


function processData(data, callback) {


    callback(data);

}


function displayData(data) {
    console.log(data);
}

getData((data) => {
    processData(data, (processesData) => {
        displayData(processesData);
    })
});



// CALLBACK HELL


getUser(function (user) {
    getProfile(user.id, function (profile) {
        getFriends(user.id, function (friends) {
            getMessages(user.id, function (messages) {
                // Faz algo com user, profile, friends e messages
            });
        });
    });
});
