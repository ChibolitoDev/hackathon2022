const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT

app.use(cors({
    origin: "*",
}))
app.use(express.json());
app.use(require('./routes/index'))

app.listen(port, () => {
    console.log("escuchando... " + port)
});
