const actionsRouter = require("express").Router();
const Actions = require("../../../data/helpers/actionModel");
const validateActions = require("../../middleware/validateActions");

// get all actions
const getAllActions = async (req, res) => {
  try {
    const actions = await Actions.get();
    return res.json(actions);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// get action by id
const getActionById = async (req, res) => {
  try {
    const action = await Actions.get(req.params.id);
    return res.json(action);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// add new action
const addAction = async (req, res) => {
  try {
    const action = await Actions.insert(req.body);
    return res.json(action);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// update action
const updateAction = async (req, res) => {
  try {
    const action = await Actions.update(req.params.id, req.body);
    return res.json(action);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// delete action
const deleteAction = async (req, res) => {
  try {
    const action = await Actions.remove(req.params.id);
    return res.json(action);
  } catch (error) {
    return res.status(500).json(error);
  }
};

actionsRouter
  .get("/", getAllActions)
  .get("/:id", validateActions.validateActionId, getActionById)
  .post("/", validateActions.validateNewAction, addAction)
  .put(
    "/:id",
    validateActions.validateActionId,
    validateActions.validateNewAction,
    updateAction
  )
  .delete("/:id", validateActions.validateActionId, deleteAction);

module.exports = actionsRouter;
