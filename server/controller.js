module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);

    }

}

    getFortune: (req, res) => {
        const fortunes = ["A beautiful,smart,and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.","A faithful friend is a strong defense.","A feather in the hand is better than a bird in the air.","A fresh start will put you on your way."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    }

    getWelcome: (req, res) => {
        const welcomes = ["Welcome, it is nice to meet you!"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * welcome.length);
        let randomWelcome = welcomes[randomIndex];
      
        res.status(200).send(randomWelcome);
    }

    getText: (req,res) => {

        const texts =["input"];

        res.status(200).send(text)
    }