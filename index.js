// const logger=require('./logger');
// logger.logActivity('User logged in');

const http=require('http');
const Server=http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/html'});
    // res.end("Response is closed");
    
    switch(req.url){
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("<h1>Welcome to Home Page</h1>");
            break;
        case '/about':
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("<h1>Welcome to About Page</h1>");
            break;
        case '/contact':
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("<h1>Welcome to Contact Page</h1>");
            break;
        default:
            res.writeHead(404,{'Content-Type':'application/json'});
            res.end({username:"",phone:""});
            break;
    }
}) 
Server.listen(8000,()=>{
    console.log('Server is listening on port 8000');
})