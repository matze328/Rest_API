const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser');
const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const { PORT } = process.env;
const { AppRouter } = require("./src/routes");
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/v1", AppRouter);


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});