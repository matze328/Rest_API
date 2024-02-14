const { Router } = require("express");
const { AuthRouter } = require("./auth");
const { UserRouter } = require("./user");
const { todosRouter } = require("./todos");
const { MembersRouter } = require("./members");

const AppRouter = Router();

AppRouter.use("/auth", AuthRouter);
AppRouter.use("/user", UserRouter);
AppRouter.use("/todos", todosRouter);
AppRouter.use("/member", MembersRouter);
module.exports = { AppRouter };