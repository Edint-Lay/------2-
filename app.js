const express = require("express");
const compress = require("compression");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const maria = require("mariadb");
const app = express();

require("dotenv").config();

app.use(cors({
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
  }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compress());
app.use(cookieParser());

app.post("/rooms", async(req, res) => {
    
})

app.listen(port, () =>
  console.log('Example app listening on port 3001!'),
);