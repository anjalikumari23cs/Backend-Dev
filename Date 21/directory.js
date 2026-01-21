const fs=require('fs');
//create a directory
fs.mkdirSync("newDirectory");
fs.mkdir("folder/folder1/folder2",{recursive:true},(err)=>{
    if(err){
        console.log("error"); 
        return;
    }
    console.log("Directory is created");
    
});
