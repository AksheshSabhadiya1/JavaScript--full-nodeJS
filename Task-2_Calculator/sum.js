const sumHandler = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const allData = Buffer.concat(body).toString();
    const params = new URLSearchParams(allData);
    const obj = Object.fromEntries(params);
    console.log(obj);

    let result = 0;
    if (obj.operation === "Addition") {
      result = Number(obj.number1) + Number(obj.number2);
      res.setHeader("Content-Type", "text/html");
      res.write(`<html>
      <head><title>Addition</title></head>
      <body>
      <h2>${obj.operation} of ${obj.number1}+${obj.number2} is ${result}</h2><br>
      <a href='/'>Goto Home</a>
      <a href='/Calculator'>Goto Calculator</a>
      </body>
      </html>`);
      return res.end();
      
    } else if (obj.operation === "Substraction") {
      result = Number(obj.number1) - Number(obj.number2);
      res.setHeader("Content-Type", "text/html");
      res.write(`<html>
      <head><title>Substraction</title></head>
      <body>
      <h2>${obj.operation} of ${obj.number1}-${obj.number2} is ${result}</h2><br>
      <a href='/'>Goto Home</a>
      <a href='/Calculator'>Goto Calculator</a>
      </body>
      </html>`);
      return res.end();

    } else if (obj.operation === "Multiply") {
      result = Number(obj.number1) * Number(obj.number2);
      res.setHeader("Content-Type", "text/html");
      res.write(`<html>
      <head><title>Multiply</title></head>
      <body>
      <h2>${obj.operation} of ${obj.number1}*${obj.number2} is ${result}</h2><br>
      <a href='/'>Goto Home</a>
      <a href='/Calculator'>Goto Calculator</a>
      </body>
      </html>`);
      return res.end();

    } else if (obj.operation === "Division") {
      result = Number(obj.number1) / Number(obj.number2);
      res.setHeader("Content-Type", "text/html");
      res.write(`<html>
      <head><title>Division</title></head>
      <body>
      <h2>${obj.operation} of ${obj.number1}/${obj.number2} is ${result}</h2><br>
      <a href='/'>Goto Home</a>
      <a href='/Calculator'>Goto Calculator</a>
      </body>
      </html>`);
      return res.end();
    }
  });
};

exports.sumHandler = sumHandler;
