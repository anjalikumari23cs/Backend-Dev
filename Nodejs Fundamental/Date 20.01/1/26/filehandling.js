const fs=require('fs');

//copy a file
fs.copyFile("C:\\Users\\anjal\\Backend-Dev\\Backend-Dev\\Date 20\\1\\26\\test.txt","C:\\Users\\anjal\\Backend-Dev\\Backend-Dev\\Date 20\\1\\26\\temp.txt",(err)=>{
    if(err){
        console.log("Error");
    }
    else{
        console.log("File copied succesfully");
    }
})

//sync function will block the code
fs.copyFileSync("C:\\Users\\anjal\\Backend-Dev\\Backend-Dev\\Date 20\\1\\26\\test.txt","C:\\Users\\anjal\\Backend-Dev\\Backend-Dev\\Date 20\\1\\26\\temp.txt");
console.log("File is copied");


//deleting a file
fs.unlink("C:\\Users\\anjal\\Backend-Dev\\Backend-Dev\\Date 20\\1\\26\\temp.txt",(err)=>{
    if(err){
        console.log("Error in deleting file");  
    }
    else{
        console.log("File deleted successfully");
    }
})
fs.unlinkSync("C:\\Users\\anjal\\Backend-Dev\\Backend-Dev\\Date 20\\1\\26\\temp.txt");
console.log("File deleted successfully");
