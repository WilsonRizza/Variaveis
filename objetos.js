// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

    cadastro = {
        nome: 'Will',
        sobrenome: 'Rizza',
        idade: 27,
        profissão: 'dev',
    }


// Crie um método no objeto anterior, que mostre o seu nome completo

    cadastro = {
        nome: 'Will',
        sobrenome: 'Rizza',
        idade: 27,
        profissão: 'dev',
    }
    console.log (cadastro.nome + ' ' + cadastro.sobrenome);
    

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

labradoodle = {
    raça: 'labrador',
    idade: 10,
    latir (pessoa) {
        if (pessoa === 'homem') {
            return 'au au'
        } else {
            return '...'
        }
    }
}

// 
// for (var numero = 1 ; numero < 10; numero++) {
//     console.log(numero)
// }
// 

var i =2;
while (i<10) {
    console.log(i)
    i++;
}


var videogames= [ 'PS4', 'XBOX360', 'PS5', 'XBOXONE'];

for (var item = 0; item < videogames.length; item++) {
    console.log(videogames[item])
    if (videogames[item] === 'PS5') {
        break
    }
}

var frutas = ['banana', 'uva', 'pera', 'abacate', 'abacaxi'];


frutas.forEach(function () {
    frutas.reverse();
    console.log(frutas)
});


var numero = 0;
var maximo = 10;

for (;numero < maximo;) {
    console.log(numero) 
    numero++;
}
