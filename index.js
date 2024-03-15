const express = require("express");
require("colors");
const app = express();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const PORT = 8000;

const db = require("./config/mongoose");

const allowOrigin = ["http://localhost:3000"]
app.use(cors({
    origin :allowOrigin,
    credentials : true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(morgan("dev"));


app.use("/",require("./routes"))

app.listen(PORT, ()=>{
    console.log(`The server is up and running on ${PORT};`.bgCyan);
})