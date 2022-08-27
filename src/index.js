const express = require("express");
require("dotenv").config();
const app = express();



app.use(express.json());
app.use(require('./routes/index'))

app.listen(3000,()=> {
    console.log("escuchando...")
});
