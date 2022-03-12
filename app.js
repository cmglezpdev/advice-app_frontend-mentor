
document.addEventListener("DOMContentLoaded", () => {
    getAdvice();
});


let title = document.querySelector(".card__title");
let phrase = document.querySelector(".card__phrase");


const getAdvice = async () => {
    const url = "https://api.adviceslip.com/advice";

    let result = await fetch( url )
                    .then(advice => advice.json())
                    .catch(error => console.log(error));

    const { slip:{ advice, id } } = result;

    title.textContent = `ADVICE #${id}`;
    phrase.textContent = `${advice}`;
}