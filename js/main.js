const tasaDolar = 0.00084
const tasaEuro = 0.00072

let monedasDisponibles = ["usd", "eur"]

let comenzar = confirm("¿Desea convertir de pesos a otra moneda?")
let tipoDeConversion
let resultado

if (comenzar) {
  alert("Monedas disponibles: " + monedasDisponibles.join("-")
) 

  tipoDeConversion = prompt("Ingrese el tipo de conversión (usd o eur):")
  let pesos = parseFloat(prompt("Ingrese la cantidad de pesos a convertir:"))

  if (tipoDeConversion === "eur") {
    resultado = pesos * tasaEuro;
    alert("El resultado es: " + resultado + " euros.")
  } 
  
  else if (tipoDeConversion === "usd") {
    resultado = pesos * tasaDolar;
    alert("El resultado es: " + resultado + " dólares.")
  }

else 
  alert("Conversión cancelada.")
}

continuar = confirm("¿Querés hacer otra conversión?")

alert("Gracias por usar el conversor. Hasta la próxima!");