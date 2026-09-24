const prompt = require("prompt-sync")();

const numero = parseFloat(prompt("Digite um número: "));
console.log(numero);

const segundoNumero = parseFloat(prompt("Informe mais um número: "));
console.log(segundoNumero);

const media = (numero + segundoNumero) / 2;
console.log("Média:", media);
