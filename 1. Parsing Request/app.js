const http = require('http')
const requestHandler = require('./userForm');


const server = http.createServer(requestHandler)

const port = 3002

server.listen(port, ()=>{
  console.log(`Server Running on http://localhost:${port}`);
})