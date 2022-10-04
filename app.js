require("dotenv").config();
const express = require('express')
const dbConnect = require("./database/config");
const cors = require("cors");
//const morganBody = require("morgan-body")
//const loggerStream = require("./utils/handleLogger")
const app = express();


app.use(cors());
app.use(express.json())
const port = process.env.PORT || 3000;

app.use("/api", require("./routes"))


app.listen(port, () =>
    console.log(`http://localhost:${port}`)
);

dbConnect()
