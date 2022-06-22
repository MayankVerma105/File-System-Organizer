let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

let path = require("path");
function returnFolderName(fileName){
    let extname = path.extname(fileName);
    extname = extname.slice(1);
    for(let key in types){
        let totalExtension = types[key];
        for(let i = 0; i< totalExtension.length; i++){
            if(totalExtension[i] == extname){
                console.log(key);
                return;
            }
        }
    }
    console.log("others")
}
returnFolderName("resume.docx");
returnFolderName("xyz.gz");