const express = require('express')
const cors = require("cors")

const { PORT } = process.env;
const app = express();

app.use(cors());

const todoes = [
  {
    id: 1,
    todoe: "Wäsche waschen",
  },
  {
    id: 2,
    todoe: "Müll rausbrigen",
  },
];

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

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});