const http= require('http');
const fs=require('fs');
const { type } = require('os');
const filecontent=fs.readFileSync('34.html');

const server=http.createServer((req, res)=>{

    res.writeHead(200, {'Content-type':'text/html'});
    res.end(filecontent);
});
server.listen(80, '127.0.0.1', ()=>{
    console.log("listening on port 80");
});