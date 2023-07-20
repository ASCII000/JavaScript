/**
 O que é uma expressão regular?
Uma expressão regular é uma sequência de caracteres que forma um padrão de pesquisa .
Ao pesquisar dados em um texto, você pode usar esse padrão de pesquisa para descrever o que está procurando.
Uma expressão regular pode ser um único caractere ou um padrão mais complicado.
As expressões regulares podem ser usadas para executar todos os tipos de pesquisa de texto e
operações de substituição de texto .
 */

// Non Regular Expression

let text = "Visit W3Schools!";
let n = text.search("W3aSchools"); // Precisa ser identico

console.log(n)

// Regular Expression

let text2 = "Visit aW3Schools";
let n2 = text.search(/w3schools/i); // Como foi usada a expressao i nao precisa

console.log(n2)