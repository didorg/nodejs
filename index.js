const express = require("express");
var cors = require('cors');

// express app
const app = express();
const port = 5000;

// middleware & static files
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

const succly = () => {
  console.log("\n","Compiled successfully!", "\n");
  console.log(` --> http://localhost:${port}`, "\n");
  console.log("Note that the development build is not optimized.");
  console.log("To create a production build, use: npm run ...");
};

app.listen(port, () => {
  succly();
});
