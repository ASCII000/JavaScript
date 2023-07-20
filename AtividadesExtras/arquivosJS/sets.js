/*
Um Conjunto JavaScript é uma coleção de valores únicos.

Cada valor só pode ocorrer uma vez em um Conjunto.

Método      Descrição

new Set()	Criar um novo conjunto
add()	    Adicionar um elemento a esse conjunto
delete()	Remover um elemento de um conjunto
has()	    Retorna verdadeiro se existir um valor no Conjunto
forEach()	Chama um callback para cada elemento no Set
values()	Retorna um iterador com todos os valores em um Set

Property	Descrição

size	    Retorna o número de elementos em um Conjunto
*/

const valores = new Set([12, 22, 33, 13, 44]) // Criando um novo set

valores.forEach((valor) => {
    console.log(valor)
})

valores.add(90)

// Forma 1 de iterar

soma = 0
valores.forEach((valor) => {
    soma += valor
})

/*
Usando o operador spread (...) (ES6): O operador spread (...) pode ser usado para converter um Set em um Array
*/
console.log(`São no total ${valores.size} sendo eles ${[...valores]} e sua soma é: ${soma}`)

// Formar 2 de iterar
for (valor of valores.values()) {
    console.log(valor)
}

