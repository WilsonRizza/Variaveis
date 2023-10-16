// Crie uma array com os anos que o Brasil ganhou a copa
// 1958, 1962, 1970, 1994, 2002


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

var WCT = ['1958', '1962','1970','1994','2002'];

for (i=0; i<WCT.length; i++) {
    console.log('O brasil foi campeão no ano de ' + WCT[i]);
}


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.


var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (i=0; i<frutas.length; i++) {
    if (frutas[i] === 'Pera') {
        break
    }
    console.log(frutas[i]);
}

var ultimaFruta = frutas[frutas.length - 1];


console.log(ultimaFruta);









// Exercício 1:
// Crie uma matriz com os nomes de cinco países. 
// Use um loop para percorrer a matriz e exiba no console a mensagem "O Brasil faz fronteira com [país]" 
// para cada país na matriz, onde [país] é o nome do país.
// 
var países = ['Bolívia', 'Argentina', 'Uruguai', 'Paraguai', 'Chile'];

for (i=0; i<países.length; i++) {
    console.log('O Brasil faz fronteira com ' + países[i])
}





 
// Exercício 2:
// Crie uma matriz com os números de 1 a 10. Use um loop para calcular a soma de todos os números na matriz e exiba o resultado no console.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var soma = 0; 

for (i=0; i<numeros.length; i++) {
    soma += numeros[i];
}
console.log(soma);







// 
// Exercício 3:
// Crie uma matriz com nomes de frutas. Use um loop para percorrer a matriz e exiba no console uma lista numerada de todas as frutas, como "1. Maçã", "2. Banana", etc.
// Use um loop para percorrer a matriz e exiba no console uma lista numerada de todas as frutas, como "1. Maçã", "2. Banana", etc.

var verduras = ['1. xuxu', '2. abóbora', '3. beterraba', '4. giló', '5. mandioca'];

for (i=0; i<verduras.length; i++) {
    console.log(verduras[i])
}









// Exercício 5:
// Crie uma matriz com nomes de cidades. Use um loop para percorrer a matriz e exiba no console a mensagem "Eu moro em [cidade]" para cada cidade na matriz.
 var cidades = [ 'Belo Horizonnte', 'Uberaba', 'Monte Carmelo', 'Uberlândia', 'Rondônia', 'amazonas']
 
 
 for (i=0; i<cidades.length; i++) {
    if (cidades[i] === 'Uberlândia') {
        console.log('Eu moro em ' + cidades[i] + ' e amo estar aqui')
    } else {
        console.log('Eu não moro em ' + cidades[i])
    }
 }



// Exercício 4:
// Crie uma matriz com uma série de números. Use um loop para encontrar o número mínimo e o número máximo na matriz e exiba-os no console.
 
 var numbers = [3, 12, 4, 30, 22, 19, 7, 35, 8, 14, 11, 29, 16, 25, 2, 10, 37, 6, 9, 20];
 var mínimo = numbers[0];
 var máximo = numbers[0];

 for (i=0; i<numbers.length; i++) {

    if (numbers[i] < mínimo ) {
        mínimo = numbers[i]
    } else if ( numbers[i] > máximo) {
        máximo = numbers[i]
    }

 }
    console.log('o menor valor é o ' + mínimo);
    console.log('o maior valor é o ' + máximo);






// Exercício 5:
// Crie um programa que exiba os números pares de 1 a 20 no console.

var números = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (i = 0; i<números.length; i++) {
    if ( [i] % 2  === 0) {
        console.log([i])
    }
}





// Exercício 6:
// Crie uma matriz com nomes de cores e use um loop para exibir cada cor no console.


 var cores = ["Vermelho", "Verde", "Azul", "Amarelo", "Roxo", "Laranja", "Rosa"];

for (i=0; i<cores.length; i++) {
    console.log(cores[i] + ' é a minha cor preferida')
}





 
// Exercício 7:
// Crie uma função que calcule a média de uma matriz de números.

// var numbers = [3, 12, 4, 30, 22, 19, 7, 35, 8, 14, 11, 29, 16, 25, 2, 10, 37, 6, 9, 20];
// var soma = 0;
// 
// for(i=0; i<numbers.length; i++) {
//     soma += numbers[i];    
// }
// 
// console.log(soma);
// 
// var media = soma / numbers.length;
// 
// console.log(media);






// Exercício 8: Crie um programa que receba uma string e conte quantas vogais (a, e, i, o, u) ela contém.




// function contarVogaisNaString(texto) {
//     var vogais = ['a', 'e', 'i', 'o', 'u'];
//     var soma = 0;
// 
//     for ( i = 0; i < texto.length; i++) {
//         var caractere = texto[i].toLowerCase(); // Converte o caractere para minúsculo para comparação
//         if (vogais.includes(caractere)) {
//             soma++;
//         }
//     }
// 
//     return soma;
// }
// 
// var texto = "Você é pra mim Você é pra mim O nascer do sol Em uma manhã de verão A chuva, o cheiro, o beijo Em qualquer estação Você é pra mim A minha segunda metade Pra mim você é Sinônimo de felicidade";
// console.log(soma);
// 







// Exercício 5:
// Crie um programa que receba uma string e conte quantas letras assim (a, b, c, d, e, f, g, h) ela contém.

function contarLetras (texto) {
    var letras = ["a, h"];
    var soma = 0; 
    

    for(i=0; i<texto.length; i++) {
        var caractere = texto[i].toLowerCase();
        if (letras.includes(caractere)) {
            soma++;
        }
    }
    return soma;
}
var texto = "Você é pra mim Você é pra mim O nascer do sol Em uma manhã de verão A chuva, o cheiro, o beijo Em qualquer estação Você é pra mim A minha segunda metade Pra mim você é Sinônimo de felicidade";
var totalLetras = contarLetras(texto);
console.log("O texto possui " + totalLetras + " letras específicas.");
 



// 
// Exercício 6:
// Crie um programa que receba um número e verifique se ele é primo.
// 
// Exercício 7:
// Crie uma função que inverta uma string. Por exemplo, "hello" deve se tornar "olleh".
// 
// Exercício 8:
// Crie um programa que gere os primeiros N números da sequência de Fibonacci, onde N é um número fornecido pelo usuário.
// 
// Exercício 9:
// Crie uma função que receba uma matriz de palavras e retorne a palavra mais longa.
// 
// Exercício 10:
// Crie um programa que simule um jogo de adivinhação. O programa escolhe um número aleatório entre 1 e 100, e o jogador tenta adivinhar o número. O programa deve fornecer dicas se o palpite for muito alto ou muito baixo.
// 