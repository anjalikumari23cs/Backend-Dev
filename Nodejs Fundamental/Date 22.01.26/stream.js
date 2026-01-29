const fs=require('fs');
const path=require('path');
// const inputstream=path.resolve(__dirname,'input.txt');
// const outputstream=path.resolve(__dirname,'output.txt');
// const writestream=fs.createReadStream(inputstream);
// const readstream=fs.createWriteStream(outputstream);
// writestream.pipe(readstream);
// console.log("File is copied");

const inputfilepath=path.join(__dirname,'input.txt');
const outputfilepath=path.join(__dirname,'output.txt');
const inputstream=fs.createReadStream(inputfilepath,'utf-8');
inputstream.on('data',(chunk)=>{
    console.log("Data is reading chunks",chunk);
});


