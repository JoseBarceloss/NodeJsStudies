const x = '10';

//checar se x é um numero.

if (!Number.isInteger(x)) {
    throw new Error ('x não é um número inteiro');
}

console.log('continuando o código...');

// o cosole de continuando o codigo acima nao apareceu no terminal pois o erro foi lançado antes.