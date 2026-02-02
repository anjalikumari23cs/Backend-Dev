unlink('test.txt',(err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("file deleted");
    }
})