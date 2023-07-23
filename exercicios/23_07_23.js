/* # 1
// Verificar PAR
function verificarPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(verificarPar(4))
console.log(verificarPar(5))
*/

/* # 2
// Contar vogais
function contarVogais(palavra) {
    let vogais = 0;
    palavra = palavra.toLowerCase();

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == 'a' || palavra[i] == 'e' || palavra[i] == 'i' || palavra[i] == 'o' || palavra[i] == 'u') {
            vogais++;
        }
    }
    return vogais;
}
console.log(contarVogais("Hello World"));
console.log(contarVogais("JavaScript"));
*/
