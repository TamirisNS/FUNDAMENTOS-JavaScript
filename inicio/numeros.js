const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger (peso1))
console.log(Number.isInteger (peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)
console.log(typeof Number)



//linha 5 - ver se um valor é inteiro ou não - true or false.
//linha 14 - toFixed mostra determinado numero de casas depois do ponto.
//linha 15 - toString transforma valor em tipo String, o valor 2 transforma em binário.
//Number N maiusculo é uma função; n minisculo é o tipo do dado.