// function treeFn(){
//     console.log("Tree command executed with the path",
//     dirPath != undefined ? dirPath : process.cwd());
// }
// const { dir } = require("console");
let fs = require("fs");
let path = require("path");
function treeFn(dirPath){
    dirPath = dirPath != undefined ? dirPath : process.cwd();
    let fKc = fs.readdirSync(dirPath);
    console.log(path.basename)
    for(let i=0; i< fKc.length; i++){
        console.log("\t"+fKc[i]);
    }
}
module.exports ={
    treeFn : treeFn
}
