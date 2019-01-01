var fs = require('fs');

var str = `
    export const config = {
        production: true,
        write_key: '${process.env.write_key}',
        bucket_name: '${process.env.bucket_name}',
        
    };
`;
fs.writeFile("./src/config/cosmic.prod.ts", str, function(err) {
    if(err) {   
        return console.log(err);
    }
    console.log("The file was saved!");
}); 