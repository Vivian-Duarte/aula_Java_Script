const data = new Date()
const dia = data.getDate() // dia atual
const mes = data.getMonth() // mes atual
const ano = data.getFullYear() //ano
//console.log(mes + 1) //considera janeiro como mes 0, por isso somar +1
console.log(`${dia}/${mes + 1}/${ano}`)

const hora = data.getHours() //hora atual
const minutos = data.getMinutes()//minutos
const segundos = data.getSeconds()//segundos
const milisegundos = data.getMilliseconds()
console.log(`${hora}:${minutos}:${segundos}:${milisegundos}`)