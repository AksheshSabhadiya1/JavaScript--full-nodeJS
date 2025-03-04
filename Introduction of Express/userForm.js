
const fs = require('fs')

const userRequestHandler = (req, res)=>{
  console.log("req url: ",req.url);
  console.log("req method: ", req.method);
  
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

      const body = []
      req.on('data', chunk => {
        body.push(chunk)
      })

      req.on('end', ()=>{
        const fullBody = Buffer.concat(body).toString()
        const params = new URLSearchParams(fullBody)
        const bodyObject = Object.fromEntries(params)

        fs.writeFileSync('userData.txt',JSON.stringify(bodyObject))       
      })

      res.statusCode = 302
      res.setHeader('location','/')
  }

  res.write('<html>')
  res.write('<head><title> Akshu Server </title></head>')
  res.write("<body><h1> Hello!! Welcome to Akshu's Home page </h1></body>")
  res.write('</html>')
  res.end()
  
}

module.exports = userRequestHandler




