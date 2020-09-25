const fs = require('fs');
// scenario 1: one argument
// module.exports = function (cmd) {
//     fs.readFile(cmd.slice(4), "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   })
// };

//scenario 2: multiple arguments
module.exports = function (cmd) {
    const array = cmd.slice(4).split(" ");
    array.forEach(element => {
        fs.readFile(element, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
    })
    })
};