const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});

app.use((req, res, next) => {
  console.log("first middleware", req.url);
  next();
});

app.use((req, res, next) => {
  console.log("second middleware", req.method);
  next();
});

app.get("/", (req, res, next) => {
  console.log("Handle home", req.url, req.method);
  res.send(
    `<h1>Welcome Bachhha</h1> <a href='/contact-us' >Goto contact-us</a> &nbsp; <a href='/review' >Goto review</a>  `
  );
});

app.get("/contact-us", (req, res, next) => {
  res.send(`<h1>Enter Your Details</h1>
    <form action='/contact-us' method='POST'>
    Name: <input type='text' name='name' > <br><br> 
    Email: <input type='email' name='email' > <br><br> 
    <input type='submit' >
    </form>`);
  });
  
  app.get("/review", (req, res, next) => {
    console.log("Handle review", req.url, req.method);
    res.send(`<h2> Enter Review </h2>
      <form action='/review' method='POST'>
      Name: <input type='text' name='name' /> <br><br>
      Description: <textarea name='description' ></textarea> <br><br>
      <input type='submit' />
      </form>
      `);
    });
    
    app.post("/contact-us", (req, res, next) => {
        console.log("first contact-us", req.url, req.method, req.body);
        // res.send("<h1>we contact you shortly....Be Happy</h1> <a href='/' >Goto Home</a> &nbsp; <a href='/review' >Goto review</a> ")
        next();
      });
      
      app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log("Handle contact-us", req.url, req.method, req.body);
  res.send(
    "<h1>we contact you shortly....Be Happy</h1> <a href='/' >Goto Home</a> &nbsp; <a href='/review' >Goto review</a> "
  );
});

app.post("/review", (req, res, next) => {
  console.log("Handle review", req.url, req.method, req.body)
  res.send(
    "<h1>Thank you for feedback.....Be Happy</h1> <a href='/' >Goto Home</a> "
  );
});
