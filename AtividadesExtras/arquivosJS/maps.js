/*
Um mapa contém pares chave-valor onde as chaves podem ser qualquer tipo de dados.
Um mapa lembra a ordem original de inserção das chaves.

Método	        Descrição
new Map()       Cria um novo mapa
set()	        Define o valor de uma chave em um Mapa
get()	        Obtém   o valor de uma chave em um mapa
delete()	    Remove um elemento Map especificado pela chave
has()	        Retorna verdadeiro se uma chave existir em um mapa
forEach()	    Chama uma função para cada par chave/valor em um Mapa
entriers()	    Retorna um iterador com os pares [chave, valor] em um Mapa

Propriedade	    Descrição
size	        Retorna o número de elementos em um mapa
*/

// Criando um mapa

function retornarValores(mapa) {
    for ([chave, valor] of mapa) {
        console.log(`Chave: ${chave} valor: ${valor}`)
    }
    console.log(`O mapa tem ${mapa.size} itens`)
}

const mapa = new Map([
    ['bananas', 200],
    ['maças', 300],
    ['uvas', 150]
])

retornarValores(mapa)

console.log(mapa.get('uvas')) // Retornar o valor de um mapa.
console.log(mapa.set('Peras', 200)) // Define um novo valor

retornarValores(mapa)

mapa.forEach((chave, valor) => {
    console.log(chave, valor)
})
