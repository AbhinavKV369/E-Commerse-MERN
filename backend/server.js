const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/",(req,res)=>{
    res.send("Welcome to the voltex-api");
});

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})

