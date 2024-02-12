const express = require('express')
const cors = require("cors")

const { PORT } = process.env;
const app = express();

app.use(cors());

app.get('/test', (req, res) => {
  res.status(200).json({ profile: { name: "Max"}});});

app.get('/user', (req, res) => {
  res.status(200).json({ profile: { firstname: "Max",lastName: "Büscher", adresse: "Hengstenbergweg 2", hobbies: "Downhill"}});});
app.get('/todoes', (req, res) => {
    res.status(200).json({ profile: { todoe1: "Wäsche waschen", todoe2: "aufräumen" }});});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});