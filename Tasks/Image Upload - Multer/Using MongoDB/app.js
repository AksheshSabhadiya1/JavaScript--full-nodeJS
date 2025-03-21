const express = require("express");
const app = express();
const port = 8922;
const path = require("path");
const { imageModel, connection } = require("./models/model");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  return res.render("Homepage");
});

app.post("/upload", upload.single("profileImage"), async (req, res) => {
  try {
    const imagepath = req.file ? req.file.buffer.toString("base64") : null;

    await imageModel.create({
      imageurl: imagepath,
    });
    res.status(201);
    return res.redirect("/");
    
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
