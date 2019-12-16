const Projects = require("../../data/helpers/projectModel");

const validateNewProject = async (req, res, next) => {
  if (!req.body.name || !req.body.description) {
    return res
      .status(404)
      .json({ message: "Please provide a name and a description please." });
  }

  next();
};

const validateProjectId = async (req, res, next) => {
  const project = await Projects.get(req.params.id);
  if (project) {
    next();
  } else {
    res.status(400).json({ message: "That project does not exist" });
  }
};

module.exports = { validateNewProject, validateProjectId };
