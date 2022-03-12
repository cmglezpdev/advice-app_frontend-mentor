
document.addEventListener("DOMContentLoaded", () => {
    getAdvice();
});


let title = document.querySelector(".card__title");
let phrase = document.querySelector(".card__phrase");
let btn_new_advice = document.querySelector(".card__title");

const getAdvice = async () => {
    const url = "https://api.adviceslip.com/advice";

    let result = await fetch( url )
                    .then(advice => advice.json())
                    .catch(() => {
                        title.textContent = `ADVICE #0`;
                        phrase.textContent = `No se puede establecer conexión con la API.`;
                    });

    const { slip:{ advice, id } } = result;

    title.textContent = `ADVICE #${id}`;
    phrase.textContent = `${advice}`;
}


document.addEventListener("click", () => {
    getAdvice();
})