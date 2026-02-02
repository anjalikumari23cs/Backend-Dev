const fs=require('fs');
const log="Anjali";
fs.appendFile('test.txt',log,(err)=>{
    if(err){
        console.log("error");
    }
})
fs.unlink('test.txt',(err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("file deleted");
    }
})
