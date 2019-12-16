const Actions = require("../../data/helpers/actionModel");
const Projects = require("../../data/helpers/projectModel");

const validateNewAction = async (req, res, next) => {
  if (!req.body.project_id || !req.body.description || !req.body.notes) {
    return res.status(404).json({
      message: "Please provide a name, a description, and notes please."
    });
  }

  next();
};

const validateActionId = async (req, res, next) => {
  const action = await Actions.get(req.params.id);
  if (action) {
    next();
  } else {
    res.status(400).json({ message: "That action does not exist" });
  }
};

module.exports = { validateNewAction, validateActionId };
