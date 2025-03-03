const http = require("http");
const port = 3000;

http
  .createServer((req, res) => {

    console.log(req.url, req.method);

    if (req.url.toLowerCase() === "/home") {
      res.write(
        "<h1>Welcome to Home page</h1>"
      );
      return res.end();
    }else if (req.url.toLowerCase() === "/men") {
      res.write(
        "<h1>Welcome to Men page</h1>"
      );
      return res.end();
    }else if (req.url.toLowerCase() === "/women") {
      res.write(
        "<h1>Welcome to Women page</h1>"
      );
      return res.end();
    }else if (req.url.toLowerCase() === "/kids") {
      res.write(
        "<h1>Welcome to Kids page</h1>"
      );
      return res.end();
    }else if (req.url.toLowerCase() === "/cart") {
      res.write(
        "<h1>Welcome to Cart page</h1>"
      );
      return res.end();
    }


    res.write(`<html>
              <head><title>Myntra</title></head>
              <body>
                <header>
                  <nav>
                    <ul>
                      <li><a href='/home'>Home</a></li>
                      <li> <a href='/men'>Men</a></li>
                      <li><a href='/women'>Women</a></li>
                      <li><a href='/kids'>Kids</a></li>
                      <li><a href='/cart'>Cart</a></li>
                    </ul>
                  </nav>
                </header>
              </body>
            </html>`);
    res.end();

  })
  .listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
  });
