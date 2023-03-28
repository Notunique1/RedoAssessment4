const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
let fortune = ["You will be loved."];

app.get ("/api/fortune", (req,res) => {
res.status(200).send(fortune);
});
const port = 4000;

app.listen(port, () => console.log(`Listening on ${port}`));



 
