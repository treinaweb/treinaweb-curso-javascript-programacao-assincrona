function main() {
    console.log("main");
}


setTimeout(() => {
    console.log("setTimeout");
}, 0);


new Promise((resolve) => {
    resolve();
}).then(() => {
    console.log("Promise");
})

main();