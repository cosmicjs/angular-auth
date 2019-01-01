var fs = require('fs');

var str = `
    export const config = {
        production: true,
        write_key: 'CY4ZYtsD6OS4ydSbXL3KHMiA1t96VE8o0s18A5sMgkcwJd9XAE,
        bucket_name: 'angularauth',
        
    };
`;
fs.writeFile("./src/config/cosmic.prod.ts", str, function(err) {
    if(err) {   
        return console.log(err);
    }
    console.log("The file was saved!");
}); 