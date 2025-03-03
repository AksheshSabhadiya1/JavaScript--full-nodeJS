const http = require('http')
const requestHandler = require('./Task2')

const port = 3000

http.createServer(requestHandler).listen(port, ()=>{
  console.log(`Server Running on http://localhost:${port}`);
})