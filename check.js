const xlsx = require('node-xlsx').default

const workSheetsFromFile = xlsx.parse(`${__dirname}/mail-check.xlsx`);
const array = JSON.stringify(workSheetsFromFile).split(',')

let bos = 0
array.forEach(element => {
    if(element !== "[]") {
        bos++
    }
    return bos
});

console.log(bos)