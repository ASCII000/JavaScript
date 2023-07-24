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

/* #3
function somaDigitos(numero) {
    if (typeof numero != 'number' || !Number.isInteger(numero)) {
        throw new Error("A função aceita somente numeros inteiros.");
    }

    const digitos = String(numero);
    const soma = digitos.split('').reduce((acc, digito) => acc + parseInt(digito), 0);
    return soma;
}

try {
    console.log(somaDigitos(22))
} catch (error) {
    console.error(error.message)
}
*/

/* # 4
function inverterString(texto) {
    if (typeof texto != 'string') {
        throw new Error("A função só aceita textos.")
    }
    return texto.split('').reverse().join('')
}

console.log(inverterString("JavaScript"))
*/
/* #5
function palindromo(palavra) {
    if (typeof palavra !== "string") {
      throw new Error("O tipo de dado tem que ser uma string!");
    }
  
    const palavraSemEspacos = palavra.toLowerCase().replace(/[^a-z0-9]/g, "");
    return palavraSemEspacos === palavraSemEspacos.split("").reverse().join("");
  }
  
  try {
    console.log(palindromo("radar")); // Saída: true
    console.log(palindromo("JavaScript")); // Saída: false
  } catch (error) {
    console.error(error.message);
  }
*/
