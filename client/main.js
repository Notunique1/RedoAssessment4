

const mouseOver= document.getElementById("demo").onmouseover = function() {mouseOver()};
mouseOver.addEventListener('click',  mouseOver);




function myFunction() {
  const text = document.getElementById("text");

  const getText = () => {
    axios.get("http://localhost:4001/api/text/")
        .then(resa => {
            const data = res.data;
            alert(data);

        });
    };


  text.addEventListener("click");
}  



const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4001/api/compliment/")
        .then(resa => {
            const data = res.data;
            alert(data);

        });
    };
complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4001/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
    }; 

fortuneBtn.addEventListener('click', getFortune)




const welcomeBtn = document.getElementById("welcomeButton")

const getWelcome = () => {
    axios.get("http://localhost:4001/api/welcome/")
        .then(res => {
            const data = res.data;
            alert(data);

        });
    };
welcomeBtn.addEventListener('click', getWelcome)