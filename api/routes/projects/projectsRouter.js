const projectsRouter = require("express").Router();
const Projects = require("../../../data/helpers/projectModel");
const validateProjects = require("../../middleware/validateProjects");

// get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Projects.get();
    return res.json(projects);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Get project by id
const getProjectById = async (req, res) => {
  try {
    const project = await Projects.get(req.params.id);
    return res.json(project);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Get Project Actions
const getProjectActions = async (req, res) => {
  try {
    const actions = await Projects.getProjectActions(req.params.id);
    return res.json(actions);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Add a project
const addProject = async (req, res) => {
  try {
    const project = await Projects.insert(req.body);
    return res.status(201).json(project[0]);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// update a project
const updateProject = async (req, res) => {
  try {
    const project = await Projects.update(req.params.id, req.body);
    return res.json(project[0]);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//delete a project
const deleteProject = async (req, res) => {
  try {
    const project = await Projects.remove(req.params.id);
    return res.json(project[0]);
  } catch (error) {
    return res.status(500).json(error);
  }
};

projectsRouter
  .get("/", getAllProjects)
  .get("/:id", validateProjects.validateProjectId, getProjectById)
  .get("/:id/actions", validateProjects.validateProjectId, getProjectActions)
  .post("/", validateProjects.validateNewProject, addProject)
  .put("/:id", validateProjects.validateNewProject, updateProject)
  .delete("/:id", validateProjects.validateProjectId, deleteProject);

module.exports = projectsRouter;
