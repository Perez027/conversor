const convertButton = document.querySelector(".convert-button")
const selectTwo = document.getElementById("selectTwo")

function convertValue() {
    const input = document.querySelector(".input").value
    const valueSelectOne = document.getElementById("valor1") // valor em real
    const valueSelectTwo = document.getElementById("valor2") // valor a ser conertido

    const dolar = 5.2
    const euro = 6.2

    if (selectTwo == "dolar") { // se for dolar entra aqui
        valueSelectTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / dolar)
    }

    if (selectTwo == "euro") { // se for euro entra aqui
        valueSelectTwo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input / euro)
    }



    valueSelectOne.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input)

}

convertButton.addEventListener("click", convertValue)