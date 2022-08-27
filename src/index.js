const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(require('./routes/index'))

app.listen(port,()=> {
    console.log("escuchando...")
});
