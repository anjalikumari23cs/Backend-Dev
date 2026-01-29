const http=require('http');
const url=require('url');
const server=http.createServer((req,res)=>{
    const parsedurl=url.parse(req.url,true);
    const {user,key}=parsedurl.query;
    if(user==='admin' && key==='Secret'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Welcom to Vualt");
    }
    else{
        res.writeHead(401,{'Content-Type':'text/plain'});
        res.end("Access Denied");
    }
});
server.listen(8000);