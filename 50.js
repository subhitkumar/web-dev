// console.log("HELLO WORLD");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Display property</title>
      <style>
          header{
              width: 15%;
              margin: auto;
              border: 2px solid red;
              
          }
          img{
              margin: auto;
              display: block;
              width: 34px;
          }
          h3{
              text-align: center;
              font-family: Arial, Helvetica, sans-serif;
              margin: 0px;
          }
          .box{
              border: 4px solid black;
              background-color: grey;
              margin: 4px;
              padding: 24px;
              display: inline-block;
              width: 30%;
              box-sizing: border-box;
  
          }
      </style>
  </head>
  <body>
      <header class="top">
        <img src="https://www.codewithharry.com/assets/img/logo.png" alt="">
          <h3>welcome to my vlog</h3>
      </header>
      <div class="container">
          <div class="box">
              <h4 class="heading">heading</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aut, beatae numquam consequatur ipsa perspiciatis ratione, dolor ab nemo ea quam eveniet veniam fugit quidem soluta exercitationem facere optio maxime! Provident minima molestias nesciunt.</p>
          </div>
          <div class="box">
              <h4 class="heading">heading</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aut, beatae numquam consequatur ipsa perspiciatis ratione, dolor ab nemo ea quam eveniet veniam fugit quidem soluta exercitationem facere optio maxime! Provident minima molestias nesciunt.</p>
          </div>
          <div class="box">
              <h4 class="heading">heading</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aut, beatae numquam consequatur ipsa perspiciatis ratione, dolor ab nemo ea quam eveniet veniam fugit quidem soluta exercitationem facere optio maxime! Provident minima molestias nesciunt.</p>
          </div>
      </div>
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});