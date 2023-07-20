/*
Significa simplesmente percorrer uma sequência de elementos.

Aqui estão alguns exemplos fáceis:

Iterando sobre uma String
Iterando sobre um Array
*/

// Método simples.

const pessoa = 'Edgar'
for (index in pessoa) {
    console.log(pessoa[index])
}

// Iretando o elemento.
//  Sobre uma String.

const nome = 'Emerson'
for (letra of nome) { // A palavra off é reservada para isso
    console.log(letra)
}
// Sobre um array.
const lista = [2, 33, true, 'olá']

for (iten of lista) {
    console.log(iten)
}

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  for (const x of fruits) {
    console.log(x)
  }
// Sobre um Map
const mapa = new Map();

mapa.set("chave1", "valor1");
mapa.set("chave2", "valor2");
mapa.set("chave3", "valor3");

for (const [chave, valor] of mapa) {
    console.log(`${chave} => ${valor}`);
  }