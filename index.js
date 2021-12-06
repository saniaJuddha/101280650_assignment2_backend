const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const cors = require("cors");
mongoose.connect("mongodb+srv://sania:admin@cluster0.n2b4m.mongodb.net/101280650_assignment2?retryWrites=true&w=majority");

const app = express();

app.use(bodyparser.json());

app.use(cors());
app.use("/", require("./routes/emp"));

app.get("/",(req,res)=>(res.send("working on backend")));
const port = process.env.PORT || 5000

app.listen(port,()=>{
  console.log(`server is up and listening on port ${port}`);
});