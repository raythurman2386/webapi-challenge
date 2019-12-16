const actionsRouter = require("express").Router();
const Actions = require("../../../data/helpers/actionModel");

// get all actions
const getAllActions = async (req, res) => {
  try {
    const actions = await Actions.get();
    res.json(actions);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get action by id
const getActionById = async (req, res) => {
  try {
    const action = await Actions.get(req.params.id);
    res.json(action);
  } catch (error) {
    res.status(500).json(error);
  }
};

// add new action

// update action

// delete action

actionsRouter.get("/", getAllActions).get("/:id", getActionById);
// .get("/:id", getProjectActions)
// .post("/", addProject)
// .put("/:id", updateProject)
// .delete("/:id", deleteProject);

module.exports = actionsRouter;
