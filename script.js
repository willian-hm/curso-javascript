// o "//" serve para deixar como comentário dentro do javascript

// VARIAVEIS
// var y;

// y = 37;
// document.write(y);
// document.write("<br>")

// y = ("Willian");
// document.write(y);
// document.write("<br>")

// y = true;
// document.write(y);
// document.write("<br>")

// y = null;
// document.write(y);
// document.write("<br>")

// EXPRESSOES
// var expressao;

// expressao = 30 + 20 - 10*5

// document.write ("30 + 20 - 10 * 5 = ")
// document.write (expressao)

// ESTRUTURA DE COMPARACAO IF ELSE
// var idade;
// idade = prompt ("digite sua idade: ")

// if (idade >= 18) {
//     var maiorIdade = true;
//    document.write("Maior de idade")
// } else {
//     var maiorIdade = false;
//     document.write ("Menor de idade")
// }

// ESTRUTURA DE COMPARACAO SWITCH
// cargo = prompt("digite seu cargo: ")
// salario = 2000
// 
// switch (cargo) {
//     case "gerente":
//         salario *= 1.15; // salario = salario * 1.15
//         break;
//     case "supervisor":
//         salario *= 1.10; // salario = salario * 1.10
//         break;  
//     default:
//         salario *= 1.05; // salario = salario * 1.05
// }
// console.log("Salario do "+ cargo +": " + salario)

// ESTRUTURAS DE REPETICAO WHILE, DO WHILE E FOR
// n = 0;
// x = 0;
// while (n < 4) {
//     n++;
//    x += n; // x = x+n;
//     console.log(x);
// }

// i = 0

// do {
//     i = i + 1;
//     console.log(i)
// } while (i < 5)

// var cont;

// for(cont = 0; cont < 10; cont++)
// {
//     console.log("Willian")
// }

// VETORES

// var sul = new Array["PR", "SC", "RS"];

// document.write("ESTADOS DA REGIAO SUL:");
// document.write("<br>");
// document.write(sul[0]);
// document.write("<br>");
// document.write(sul[1]);
// document.write("<br>");
// document.write(sul[2]);

// var sul = ["PR", "SC", "RS"];

// var tam = sul.length; // length contabilizará a quantidade de valores que há
// na variável sul, ou seja, 3 valores

// document.write("ESTADOS DA REGIAO SUL:");

// for(i=0; i<tam; i++) {
// 	document.write("<br>");
//  document.write(sul[i]);
// }

// var meses = ["jan ", "fev ", "mar "];

// meses.push("abr");

// console.log(meses);

// var frutas = ["banana", "laranja", "maçã"]

// frutas.pop() // remove "maçã", que é o último valor de frutas
// frutas.unshift("morango") // adiciona o valor "morango" no começo de frutas

// console.log(frutas) // exibe no console a var frutas

// MATRIZES

//var tabuleiro = [['R','N','B','Q','K','B','N','R'],
//                ['P','P','P','P','P','P','P','P'],
//                 [' ',' ',' ',' ',' ',' ',' ',' '],
//                 [' ',' ',' ',' ',' ',' ',' ',' '],
//                 [' ',' ',' ',' ',' ',' ',' ',' '],
//                [' ',' ',' ',' ',' ',' ',' ',' '],
//                 ['p','p','p','p','p','p','p','p'],
//                 ['r','n','b','q','k','b','n','r']];
//
//console.log(tabuleiro.join('\n') + '\n\n');
//
//tabuleiro[4] [2] = tabuleiro[6] [2];
//tabuleiro[6] [2] = ' ';
//console.log(tabuleiro.join('\n'));


// FUNÇÕES E STRINGS

//function quadrado(n) {
//    quad = n*n;
//    return quad;
//} 

//var valor = 5;
//result = quadrado(valor);
//alert(result);

//function teste() {
//    const var1 = 'valor';
//    function teste2() {
//        document.write('Funcao Interna');
//    }
//    teste2();
//}

//teste();
//document.write(var1);

// BIBLIOTECA JQUERY