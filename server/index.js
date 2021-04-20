const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("请求到了...", req.query);
  res.send("Hello World!");
});

app.get("/jsonp", (req, res) => {
  const data = {
    msg: "wang kun qi ke wu,chao wo",
  };
  res.send(`${req.query.funName}(${JSON.stringify(data)})`);
});

app.post("/cors", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Allow-Credentials", true);
  // res.setHeader("Access-Control-Expose-Headers",)
  res.send("随便了");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
