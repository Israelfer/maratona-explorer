const answerElement = document.querySelector("#answer")
const inputQuestion = document.querySelector("#inputQuestion")
const buttonToAsk = document.querySelector("#buttonToAsk")
const answers = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte  novamente.",
    "Sinais apontam que sim."
]


function toAsk() {

    if (inputQuestion.value == "") {
        alert("Digite sua pergunta")
        return
    }

    buttonToAsk.setAttribute("disabled", true)

    const question = "<div>" + inputQuestion.value + "</div>"

    const totalAnswers = answers.length
    const randomNumber = Math.floor(Math.random() * totalAnswers)
    // answerElement.innerHTML = question + "Mostrar"
    answerElement.innerHTML = question + answers[randomNumber]

    answerElement.style.opacity = 1;

    //sumir a resposta depois de 3 segundos
    setTimeout(function() {
        answerElement.style.opacity = 0;
        buttonToAsk.removeAttribute('disabled')
    }, 3000)
}