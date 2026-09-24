//exercicio 1

/* const metros = 6

const deci = metros * 10
const cent = metros * 100
const mili = metros * 10000

console.log(`6 metros esquivale a ${deci} decimetros.`)
console.log(`6 metros esquivale a ${cent} centimetros.`)
console.log(`6 metros esquivale a ${mili} milimetros.`) */

// exercicio 2

// Math.floor arredonda para baixo.
/* let aleatorio = Math.floor(Math.random() * 101);
console.log(aleatorio);

let suce = aleatorio + 1;
let ante = aleatorio - 1;

console.log(`O numero gerado e: ${aleatorio.toFixed(2)}`)
console.log(`O sucessor de ${aleatorio} eh o numero ${suce}`)
console.log(`O antecessor de ${aleatorio} eh o numero ${ante}`) */

// exercicio 3

/* const lado = 5.89
const area = lado * lado
console.log(`O valor da area do quadrado de lado ${lado} vale ${area.toFixed(2)}`) */

// exercicio 4

/* const prompt = require('prompt-sync')();
let valorHora = Number(prompt("Quanto você ganha por hora? "));
let hora = Number(prompt("Quantas horas trabalhou no mês? "));

let salBruto = valorHora * hora;
let inss = salBruto * 0.10;
let sind = salBruto * 0.02;
let impo = salBruto * 0.15;

let totalDesconto = inss + sind + impo;
let salLiq = salBruto - totalDesconto; 

console.log(`O salario bruto: ${salBruto.toFixed(2)}`);
console.log("Os descontos do salario bruto sao:");
console.log(`O valor pago pelo INSS: ${inss.toFixed(2)}`);
console.log(`Valor pago pelo sindicato: ${sind.toFixed(2)}`);
console.log(`Valor do imposto de renda: ${impo.toFixed(2)}`);
console.log(`Salario liquido: ${salLiq.toFixed(2)}`); */

// exercicio 5

 const prompt = require('prompt-sync')();

let soma = 0;
let totalNotas = 3;

console.log("Informe suas notas:");
for(let i = 1; i <= 3; i++){
// Pede a nota ao usuário e converte para Número
    let notaDigitada = Number(prompt(`Digite a Nota ${i}: `));
    
    // Adiciona a nota digitada 
    soma = soma + notaDigitada;
}

let media = soma / totalNotas;
console.log(`Sua media eh de ${media.toFixed(2)}`); 

