const express = require('express')
const cors = require("cors")
var bodyParser = require('body-parser')
const { PORT } = process.env;
const app = express();
app.use(bodyParser.json());
app.use(cors());

let todoes = [
  {
    id: 1,
    todoe: "Wäsche waschen",
  },
  {
    id: 2,
    todoe: "Müll rausbrigen",
  },
];
// GET ANFRAGE
app.get('/test', (req, res) => {
  res.status(200).json({ profile: { name: "Max"}});});

app.get('/user', (req, res) => {
  res.status(200).json({ profile: { firstname: "Max",lastName: "Büscher", adresse: "Hengstenbergweg 2", hobbies: "Downhill"}});});
app.get('/todoes', (req, res) => {
    res.json({todoes})
}),
app.get("/todoe", (req, res) => {
  const todoeId = parseInt(req.query.todoeId);
  const userProfile = todoes.find((item) => item.id === todoeId);
  res.json({ todoe: userProfile });
});
// post anfrage
app.post("/todoe", (req, res) => {
  const newtodoe = req.body;

  todoes.push(newtodoe);

  res.json({ newtodoe: newtodoe });
})
// Put anfrage
app.put("/todoe/addtodoe", (req, res) => {
  const { todoe, userId } = req.body.todoe;

  const currenttodoe = todoes.find((item) => item.id === userId);
  currenttodoe.todoe = todoe;

  const deletedtodoes = todoes.filter((item) => item.id !== userId);
  deletedtodoes.push(currenttodoe);

  todoes = deletedtodoes;

  res.json({ updatedtodoe: currenttodoe });
});

// delete anfrage
app.delete("/todoe", (req, res) => {
  const { userId } = req.body.todoe;

  const deletedtodoes = todoes.filter((item) => item.id !== userId);
  todoes = deletedtodoes;

  res.json({ deletedUserId: userId });
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});