
const http = require('http')

// function requestListner(req, res) {
//   console.log(req);
// }

// http.createServer(requestListner)


const server = http.createServer((req, res) => {
  console.log("req url: ",req.url);
  console.log("req method: ", req.method);
  console.log('req headers: ', req.headers);
  
  res.setHeader('Content-Type','text/html')
  
  if(req.url === '/'){
    res.write('<html>')
    res.write('<head><title> Akshu Server </title></head>')
    res.write("<body><h1> Hello!! Welcome to Akshu's Home page </h1></body>")
    res.write('</html>')
    res.end()

  } else if (req.url.toLowerCase() === '/products'){
    res.write('<html>')
    res.write('<head><title> Akshu Server </title></head>')
    res.write("<body><h1> Hello!! Welcome to Products page </h1></body>")
    res.write('</html>')
    res.end()

  } else {
    res.write('<html>')
    res.write('<head><title> Akshu Server </title></head>')
    res.write(`<body><h1> Hello!! Welcome to ${req.url} page </h1></body>`)
    res.write('</html>')
  res.end()
  }


  // process.exit()      //stop server
})

const port = 3000
server.listen(port, ()=>{
  console.log(`Server running on address http://localhost:${port}`);
})