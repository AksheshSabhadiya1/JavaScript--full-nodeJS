const http = require('http')


const server = http.createServer((req, res)=>{
  console.log(req.url);
})

const port = 3002

server.listen(port, ()=>{
  console.log(`Server Running on http://localhost:${port}`);
})
