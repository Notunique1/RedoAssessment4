const express = require("express");
const cors = require("cors"); 

const app = express();
app.use(express.json());
app.use(cors());
let fortune = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.","A faithful friend is a strong defense.","A feather in the hand is better than a bird in the air.","A fresh start will put you on your way."];
let compliment = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."]
let welcome = ["Welcome it is nice to meet you!"]
app.get ("/api/fortune", (req,res) => {
res.status(200).send(fortune);
});

app.get ("/api/compliment", (req,res) => {
    res.status(200).send(compliment);
    });

    app.get ("/api/welcome", (req,res) => {    
        res.status(200).send(welcome);
        });
const port = 4001;

app.listen(port, () => console.log(`Listening on ${port}`));



 
