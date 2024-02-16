const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

let todoes = [
  {
    id: 1,
    userId: 1,
    task: "Wäsche waschen",
    isDone: true,
    dueDate: new Date("2024-03-03")
  },
  {
    id: 2,
    userId: 1,
    task: "Müll rausbrigen",
    isDone: true,
    dueDate: new Date("2024-03-03")
  },
];

const todosRouter = Router();

todosRouter.put("/update", (req, res) => {
  res.status(StatusCodes.OK).send("Todo updaten");
})
todosRouter.put("/mark", (req, res) => {
  res.status(StatusCodes.OK).send("Todo als erledigt makieren");
})
todosRouter.post("/create", (req, res) => {
  const newtodoe = req.body;

  todoes.push(newtodoe);

  res.json({ newtodoe: newtodoe });
})
todosRouter.delete("/delete", (req, res) => {
  res.status(StatusCodes.OK).send("Todo löschen");
});
todosRouter.get("/byid", (req, res) => {
  const todoeId = parseInt(req.query.todoeId);
  if (!todoeId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  const userProfile = todoes.find((item) => item.id === todoeId);
  res.status(StatusCodes.OK).json({ todoe: userProfile });
});
todosRouter.get("/byuserid", (req, res) => {
  const userId = parseInt(req.query.userId);
  if (!userId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  const userTodos = todoes.filter((item) => item.userId === userId);
  res.status(StatusCodes.OK).json(userTodos);
});
todosRouter.get("/alltodos", (req, res) => {
  res.status(StatusCodes.OK).send(todoes);
})

module.exports = { todosRouter };