//variaveis
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')

const respostas = [
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
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

//clicar em fazer perguntar
function fazerPergunta(){

    //Coletar pergunta
    if(inputPergunta.value == ""){
        alert ("Poxa coloca uma pergunta ai amigo!")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    //total de repostar
    const totalRespostas =  respostas.length

    // gerar numero aleatorio
    const numAleatorio = Math.floor(Math.random() * totalRespostas) 

    elementoResposta.innerHTML = pergunta + respostas[numAleatorio]

    elementoResposta.style.opacity = 1;

    //Sumir resposta
    setTimeout(function()   {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)

}