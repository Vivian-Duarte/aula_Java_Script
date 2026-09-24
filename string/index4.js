const nome = 'Bruno'
console.log(typeof nome)

const tamanho = nome.length //retorna o tamanho da variavel
console.log(tamanho)

console.log(nome.includes('b')) //verifica se a letra b minuscula faz parte da palavra

const nomeCompleto = nome.concat('dias') //concatena a variavel
console.log(nomeCompleto)

console.log(nome.toUpperCase()) //converte cada caractere da variavel para maisculo
console.log(nome.toLocaleUpperCase()) //converte em minuscullo

const numero = 44.67777
console.log(numero)
const novoNumero = numero.toFixed(2) //vc coloca a quantidade de casas decimais que quiser
console.log(novoNumero)


//AREA DO CIRCULO

const pi = Math.PI
const raio = 10
const area = pi * Math.pow(raio, 2)
console.log('A area e: ', area.toFixed(2))
//console.log(`Pi: ${pi} * ${raio} * ${raio} = ${area.toFixed(2)}`)
