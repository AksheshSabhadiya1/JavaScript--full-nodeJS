
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
  console.log("req url: ",req.url);
  console.log("req method: ", req.method);
  // console.log('req headers: ', req.headers);
  
  res.setHeader('Content-Type','text/html')
  
  if(req.url === '/login'){
    res.write('<html>')
    res.write('<head><title> Akshu Server </title></head>')
    res.write("<body><h1> Hello!! Welcome User </h1>")
    res.write("<form action='/submit-details' method='POST' >")
    res.write("<input type='text' name='username' placeholder='Enter username'><br>")
    res.write("<input type='radio' name='gender' id='male' value='male' />")
    res.write("<label for='male'>Male</label>")
    res.write("<input type='radio' name='gender' id='female' value='female' />")
    res.write("<label for='female'>Female</label>")
    res.write("<br><input type='submit' value='submit' />")
    res.write("</form>")
    res.write("</body>")
    res.write('</html>')
    return res.end()

  } else if( req.url.toLowerCase() === '/submit-details' && req.method === 'POST'){
      fs.writeFileSync('userData.txt','Akshu Sabhadiya')
      res.statusCode = 302
      res.setHeader('location','/')
  }

  res.write('<html>')
  res.write('<head><title> Akshu Server </title></head>')
  res.write("<body><h1> Hello!! Welcome to Akshu's Home page </h1></body>")
  res.write('</html>')
  res.end()
  
})

const port = 3002

server.listen(port, ()=>{
  console.log(`Server Running on http://localhost:${port}`);
})