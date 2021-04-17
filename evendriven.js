// pemanggilan module
const fs = require('fs');

// someAsyncOperation callback
function someAsyncOperation(callback) {
// Asumsikan ini membutuhkan waktu kira-kira 95 ms untuk menyelesaikannya
 fs.readFile('/path/to/file', callback);
}


const timeoutScheduled = Date.now();

setTimeout(() => {
 const delay = Date.now() - timeoutScheduled;
 console.log(`${delay}ms Telah selasai sejak sayamenjadwalkannya`);
}, 100);




// lakukan AsycOperation yang membutuhkan waktu kira-kira 95 ms untuk
someAsyncOperation(() => {
    const startCallback = Date.now();
    console.log(startCallback)
    // lakukan sesuatu yang membutuhkan waktu kira-kira 95 ms
    console.log(Date.now() - startCallback < 10)
    while (Date.now() - startCallback < 10) {
    // nothing
    }
   });