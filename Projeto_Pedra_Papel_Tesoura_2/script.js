alert("Pronto para iniciar um jogo de pedra, papel ou tesoura?")

var userChoice = null
var divMaq = window.document.querySelector("div#ChoiceComputer")
var computerChoice = Math.random();
var resultado = window.document.querySelector("div#result")
var btPedra = window.document.querySelector("div#pedraButton")
var btPapel = window.document.querySelector("div#papelButton")
var btTesoura = window.document.querySelector("div#tesouraButton")

if (computerChoice < 0.34) {

    computerChoice = "pedra";

} else if (computerChoice <= 0.67) {

    computerChoice = "papel";

} else {

    computerChoice = "tesoura";

}


var compare = function (choice1, choice2) {

    if (choice1 === choice2)

            resultado.innerText = "O resultado é um empate!"

    else if (choice1 === "pedra") {

        if (choice2 === "tesoura")

        resultado.innerText = "Pedra vence!"

        else {

            resultado.innerText = "Papel vence!"

        }
    
    } 

    else if (choice1 === "papel") {

        if (choice2 === "pedra")

        resultado.innerText = "Papel vence!"

        else {

            resultado.innerText = "Tesoura vence!"

        }

    } 
 
    else if (choice1 === "tesoura") {

        if (choice2 === "pedra")

        resultado.innerText = "Pedra vence!"

        else {

            resultado.innerText = "Tesoura vence!"

        }

    } }

compare(userChoice, computerChoice)

btPedra.addEventListener('click',pd)
function pd() {
    btPedra.style.background = "rgb(122, 55, 55)" 
    userChoice = "pedra"
    divMaq.innerHTML = `A máquina escolheu ${computerChoice}`
    compare(userChoice, computerChoice)
}


btPapel.addEventListener('click',pl)
function pl() {
    btPapel.style.background = "rgb(91, 145, 89)"
    userChoice = "papel"
    divMaq.innerHTML = `A máquina escolheu ${computerChoice}`
    compare(userChoice, computerChoice)
}

btTesoura.addEventListener('click',ts)
function ts() {
    btTesoura.style.background = "rgb(138, 89, 138)"
    userChoice = "tesoura"
    divMaq.innerHTML = `A máquina escolheu ${computerChoice}`
    compare(userChoice, computerChoice)
}



