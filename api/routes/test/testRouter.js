const testRouter = require("express").Router();

testRouter
  .get("/", (req, res) => {
    res.status(200).json({ message: "Did this work??" });
  })
  .get("/api", (req, res) => {
    res.status(200).json({ message: "Your api is working!" });
  });

module.exports = testRouter;
