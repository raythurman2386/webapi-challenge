const testRouter = require("./test/testRouter");
const projectsRouter = require("./projects/projectsRouter");

module.exports = server => {
  server.use("/", testRouter);
  server.use("/api/projects", projectsRouter);
};
