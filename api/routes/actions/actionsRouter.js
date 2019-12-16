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
const addAction = async (req, res) => {
  try {
    const action = await Actions.insert(req.body);
    res.json(action);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update action
const updateAction = async (req, res) => {
  try {
    const action = await Actions.update(req.params.id, req.body);
    res.json(action);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete action
const deleteAction = async (req, res) => {
  try {
    const action = await Actions.remove(req.params.id);
    res.json(action);
  } catch (error) {
    res.status(500).json(error);
  }
};

actionsRouter
  .get("/", getAllActions)
  .get("/:id", getActionById)
  .post("/", addAction)
  .put("/:id", updateAction)
  .delete("/:id", deleteAction);

module.exports = actionsRouter;
