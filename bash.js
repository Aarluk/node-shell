const pwd = require("./pwd.js");
const ls = require("./ls.js")
const cat = require("./cat.js")

console.log(typeof ls);
process.stdout.write("prompt > ");

    process.stdin.on("data", (data) => {
        const cmd = data.toString().trim();
        if(cmd === "pwd") {
            pwd();
        } else if(cmd === "ls") {
            ls();
        } else {
            cat(cmd);
        }
    });