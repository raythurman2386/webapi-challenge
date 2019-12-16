const testRouter = require("./test/testRouter");

module.exports = server => {
  server.use("/", testRouter);
};
