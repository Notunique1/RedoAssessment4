const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);

        });
    };
complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
    }; 

fortuneBtn.addEventListener('click', getFortune)



const handleSubmit = (e) =>
{
  e.preventDefault(); // prevent reload while click submit button
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  // do something
}
var element = document.getElementById("Mobility");
element.value = "10";