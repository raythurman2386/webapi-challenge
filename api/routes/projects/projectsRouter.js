const projectsRouter = require("express").Router();
const Projects = require("../../../data/helpers/projectModel");

const getAllProjects = async (req, res) => {
  try {
    const projects = await Projects.get();
    res.json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Projects.get(req.params.id);
    res.json(project);
  } catch (error) {
    res.status(500).json(error);
  }
};

projectsRouter.get("/", getAllProjects).get("/:id", getProjectById);

module.exports = projectsRouter;
