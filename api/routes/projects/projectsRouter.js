const projectsRouter = require("express").Router();
const Projects = require("../../../data/helpers/projectModel");

// get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Projects.get();
    res.json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get project by id
const getProjectById = async (req, res) => {
  try {
    const project = await Projects.get(req.params.id);
    res.json(project);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Add a project
const addProject = async (req, res) => {
  try {
    const project = await Projects.insert(req.body);
    res.status(201).json(project[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a project
const updateProject = async (req, res) => {
  try {
    const project = await Projects.update(req.params.id, req.body);
    res.json(project[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

//delete a project
const deleteProject = async (req, res) => {
  try {
    const project = await Projects.remove(req.params.id);
    res.json(project[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

projectsRouter
  .get("/", getAllProjects)
  .get("/:id", getProjectById)
  .post("/", addProject)
  .put("/:id", updateProject)
  .delete("/:id", deleteProject);

module.exports = projectsRouter;
