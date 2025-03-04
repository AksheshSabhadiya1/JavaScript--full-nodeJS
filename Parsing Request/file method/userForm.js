
const fs = require('fs')

const userRequestHandler = (req, res)=>{
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

      const body = []
      req.on('data', chunk => {
        body.push(chunk)
      })

      req.on('end', ()=>{
        const fullBody = Buffer.concat(body).toString()
        const params = new URLSearchParams(fullBody)
        const bodyObject = Object.fromEntries(params)
        // fs.writeFileSync('userData.txt',JSON.stringify(bodyObject))       //using writeFileSync is done by Event loop

        fs.writeFile('userData.txt', JSON.stringify(bodyObject), ()=> {
          console.log("Data written successfully");
          res.statusCode = 302
          res.setHeader('location','/')
          return res.end()
        })
      })      
  } else{
      res.write('<html>')
      res.write('<head><title> Akshu Server </title></head>')
      res.write("<body><h1> Hello!! Welcome to Akshu's Home page </h1></body>")
      res.write('</html>')
      res.end()
  }

}

module.exports = userRequestHandler


//~~ multiple exports using object
/*  module.exports = {
        handler: userRequestHandler,
        Extra : 'extra items',
        functions : () => {}
    } */

//~~ Setting multiple properties
/*  module.exports.handler = userRequestHandler
    module.exports.Extra = "extra items"
    module.exports.functions = () => {} */

//~~ Shortcut
/*  exports.handler = userRequestHandler
    exports.Extra = 'extra items'
    exports.functions = () => {} */

