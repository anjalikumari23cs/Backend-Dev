const { timeStamp } = require('console');
const os=require('os');
const totalmemory=os.totalmem()/(1024*1024*1024); 
const freememory=os.freemem()/(1024*1024*1024); 
const plateform=os.platform();  
const cpus=os.cpus()[0].model;   

const uptime=os.uptime()/3600; 
const userinfo=os.userInfo(); 

const fs=require('fs');
const log=`
Time:${timeStamp}
free Memory: ${freememory}
uptime:${uptime}
userinfo:${userinfo.username}`


setInterval(() => {
    fs.appendFile("./os_info.txt",log,(err)=>{
        if(err){
            console.log("error");
        }
    })
}, 5000);