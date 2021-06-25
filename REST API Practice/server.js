const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const sayHi = (req, res) => {
    res.send("this server is belong to us");
};

app.get("/", sayHi);

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send(`The sum is: ${a + b}`);
});

// fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(response => response.json())
//     .then(json => console.log(json));

app.listen(3000, () => {
    console.log("this server is running on 3000");
});