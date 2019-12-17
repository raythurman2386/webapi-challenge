const testRouter = require("./test/testRouter");
const projectsRouter = require("./projects/projectsRouter");
const actionsRouter = require("./actions/actionsRouter");
const errorRoutes = require("./errors/errorRoutes");

module.exports = server => {
  server.use("/", testRouter);
  server.use("/api/projects", projectsRouter);
  server.use("/api/actions", actionsRouter);
  server.use(errorRoutes);
};
