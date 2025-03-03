const {sumHandler} = require('./sum')


const requestHandler = (req, res)=>{

  if(req.url === '/'){
    res.setHeader('Content-Type','text/html')
    res.write(`<html>
      <head><title>Calculator</title></head>
      <body>
      <h1>Welcome User</h1><br>
      <a href='/calculator'>Goto Calculator</a>
      </body>
      </html>`)
    return res.end()
      
  }else if(req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-Type','text/html')
    res.write(`
      <head><title>Calculator</title></head>
      <h1>Calculator</h1>
      <form action='/calculate-result' method='POST'>
      <input type='number' name='number1' placeholder='Enter 1st value' /><br>
      <input type='number' name='number2' placeholder='Enter 2nd value' /><br><br>
      <select name='operation' >
        <option name='addition'>Addition</option>
        <option name='substraction'>Substraction</option>
        <option name='multiply'>Multiply</option>
        <option name='division'>Division</option>
      </select><br>
      <input type='submit' value="Calculate" />
      </form>
      `)
    return res.end()

  } else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
      return sumHandler(req, res)
  }

  res.setHeader('Content-Type','text/html')
  res.write(`<html>
    <head><title>Calculator</title></head>
    <body>
    <h1>404 Page not Exist</h1><br>
    <a href='/'>Goto Home</a>
    </body>
    </html>`)
  return res.end() 

}


module.exports = requestHandler