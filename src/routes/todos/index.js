const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

let todoes = [
  {
    id: 1,
    todoe: "Wäsche waschen",
    "done": true
  },
  {
    id: 2,
    todoe: "Müll rausbrigen",
    "done": false
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
  res.status(StatusCodes.OK).send("alle todoes von einem Benutzer");
});

module.exports = { todosRouter };