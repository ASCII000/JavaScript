/*
Throw e Try...Catch...Finally
A tryinstrução define um bloco de código para executar (para tentar).

A catchinstrução define um bloco de código para lidar com qualquer erro.

A finallyinstrução define um bloco de código a ser executado independentemente do resultado.

A throwinstrução define um erro personalizado.
 */


// Exemplo de Try / Catch
/*
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
*/

try {
    const x = 12
    addalert(x)
} catch(erro) {
    console.log("Algo deu errado. " + erro)
}
/** EXEMPLO DE FINALLY
 try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
 */

try {
    const x = 12
    eval("alert('teste)")
} catch(erro) {
    console.log("Algo deu errado. " + erro.name)
} finally {
    console.log("Fim do bloco")
}

