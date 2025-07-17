//Tasas, coeficiente.
const tasas = {
    usd: 0.00084,
    eur: 0.00072,
    lib: 0.00063
}

//Tipos de tasas
const tipoDeTasas = [
    {id: 1,
    moneda: "Dolar Estadounidense",
    simbolo: "U$D"
    },
    {
    id:2,
    moneda: "Euro",
    simbolo:"€"
    },
    {
    id: 3,
    moneda: "Libra Esterlina",
    simbolo: "£"
    }
]


//DOM
let input = document.getElementById("input")
let calcular = document.getElementById("calcular")
let selectMoneda = document.getElementById("moneda")
let banner = document.getElementById("banner")

//Recorrer el array.
function renderTasas(tipoDeTasas) {
    const lista =document.createElement("ul")
    tipoDeTasas.forEach(tasa => {
        const divisas = document.createElement("li")
        divisas.innerHTML = `<h4>${tasa.moneda} ${tasa.simbolo}.</h4>`
        lista.appendChild(divisas)
        banner.appendChild(lista)
    })
}
renderTasas(tipoDeTasas)


//Onclick
calcular.onclick = () => {
    let monedaSeleccionada = selectMoneda.value
    let resultado
    let print = document.createElement("h5")

    switch (monedaSeleccionada) {
        case "usd":
            resultado = input.value * tasas.usd
            print.innerHTML = `$${input.value} son USD ${resultado}`
            break
        case "eur":
            resultado = input.value * tasas.eur;
            print.innerHTML = `$${input.value} son EUR ${resultado}`
            break
        case "lib":
            resultado = input.value * tasas.lib
            print.innerHTML = `$${input.value} son GBP ${resultado}`
            break
        default:
            print.innerHTML = "Moneda no válida"
    }
    document.body.append(print)

//Almacenamiento
    localStorage.setItem("conversion", print.innerHTML)
}


