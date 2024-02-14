const { Router } = require("express");
const { StatusCodes } = require("http-status-codes");

const MembersRouter = Router();

MembersRouter.put("/hinzügen", (req, res) => {
  res.status(StatusCodes.OK).send("Mitglieder hinzufügen");
});

MembersRouter.delete("/entfernen", (req, res) => {
  res.status(StatusCodes.OK).send("UMitglieder entfernen");
});

MembersRouter.get("/auslesen", (req, res) => {
  res.status(StatusCodes.OK).send("LMitglieder auslesen");
});

module.exports = { MembersRouter };