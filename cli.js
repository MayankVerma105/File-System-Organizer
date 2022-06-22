let inputArr = process.argv.slice(2);
let helpFnObj =  require("./help")
let treeFnObj =  require("./tree")
let organizeFnObj =  require("./organize")
let command = inputArr[0];
let dirPath = inputArr[1];
let listOf
switch(command){
    case "help":
        helpFnObj.helpFn();
        // console.log("Help Command executed");
    break;
    case "tree":
        treeFnObj.treeFn(dirPath);
        // console.log("Tree command executed with the path", dirPath != undefined ? dirPath : process.cwd());
    break;
    case "organize":
        organizeFnObj.organizeFn(dirPath);
        // console.log("Organize command executed", dirPath != undefined ? dirPath : process.cwd());
    break;
    default:
        console.log("Wrong command. Type help to see the list of all the commands");
}