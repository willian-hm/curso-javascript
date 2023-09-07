# curso-javascript

- Apresentação
    - Linguagem de programação utilizada para dar dinamicidade e implementar itens complexos nas páginas web. Completa a tríade das linguagens essenciais (css, html e javascript)
    - Roda junto ao cliente (mas há tecnologias que rodam no servidor tbm, mas no curso n tem)
    - Surgiu por Bredan Eich em 1995
    - Moch → LiveScript → JavasSript
    - mantenedor da ling → fundação mozilla
    - programação mais utilizada

- Como aplicar no html
    - tag script dentro do html
    - para um arquivo js com type:text/javascript dentro da tag script

- Variáveis e Expressões
    - Variáveis
        - Atribuímos valores a elas
        - São reais de 64bits
        - São objetos (referência)

    - Expressões
        - soma +
        - subtração -
        - multiplicação e div * /
        - Resto de divisão %
        - Incremento ++
        - Deecremento --

    - Operadores de Comparação
        São usadas em repetição e condição
        - Valor igual ==
        - Valor e tipo igual ===
        - Diferente !=
        - Valor e tipo dif. !==
        - Maior >
        - Menor <
        - Maior/igual ou menor/igual >= <=
        - And &&
        - Or ||
        - Não !
        
- Vetores
    - Estrutura de seleção
        - Muda o fluxo/dá condição
        - if/else e switch

    - Estrutura de repetição
        - while - executa qnd condição verdadeira, qnd falsa ele para
        - do - while - repita até
        - for - é repetido por uma quantidade definida de vezes

    Tipo de dado estruturado que tem um número fixo de componentes, geralmente armazena variáveis do msm tipo, porém no javascript é possível armazenar tipos diferentes em um mesmo vetor

    - Ex: var sul = new Array(”RS”, ”SC”,  “PR”); → nesse exemplo, temos os valores 0 (RS), 1 (SC) e 2 (PR) dentro do vetor sul
    - Para exibir os valores, por exemplo, podemos utilizar o document.write(sul[0]), assim, na página hmtl será exibido “RS”
    - Para diminuirmos o código de exibição ao envés de fazer document.write(sul[0]), document.write(sul[1]), document.write(sul[2]), para exibir os 3 valores, podemos utilizar uma estrutura de repetição “for”, como no exemplo abaixo:
    
    ```jsx
    var sul = ["PR", "SC", "RS"];

    var tam = sul.length; // length contabilizará a quantidade de valores que há
    // na variável sul, ou seja, 3 valores

    for(i=0; i<tam; i++) {
        document.write("<br>");
        document.write(sul[i]);
    }
    ```

    - Outra coisa que podemos utilizar é o push, que possibilita a adição de um outro valor no final do vetor, como no exemplo abaixo

    ```jsx
    var meses = ["jan", "fev", "mar"]

    meses.push("abr");

    console.log(meses)
    ```

    - Nesse código, será exibido no console, todos os valores do vetor, incluindo “abr”, que fora adicionado após a criação da variavel
    - Além disso, há tbm o pop (remove o último elemento do array) e unshift (adiciona valores no inicio do arrray), observe no exemplo abaixo

    ```jsx
    var frutas = ["banana", "laranja", "maçã"]

    frutas.pop() // remove "maçã", que é o último valor de frutas
    frutas.unshift("morango") // adiciona o valor "morango" no começo de frutas

    console.log(frutas) // exibe no console a var frutas
    ```

    - Também existem os métodos: 
        - Shift que remove o primeiro valor do vetor
        - Splice que remove ou altera um ou mais elementos do vetor
        - Slice que retorna uma faixa de elementos de um vetor
        - Sort que ordena os dados em um vetor
        - Reverse inverte as posições dos valores no vetor
        - Concat junta um ou mais vetores
        - Join junta valores de um vetor com um caracter de separador

- Matrizes
    - É um array bidimencional, onde possui um núm fixo de componentes em 2 dimensões, é um array dividido em linhas e colunas (ambos iniciam-se no 0 e é nessa ordem o índice)
    
    ```jsx
    var matint = [[3,6,9],
                  [2,4,6],
                  [1,2,3]];
    ```
    
- Funções e Strings
    - Subprograma que pode ser chamado por um código externo à sua função, é um conjunto de intruções que calcula um valor, valores podem ser passados para uma função que retorna com um valor resposta
    - function [nome da função] ([condições]) {[instruções]}
    - Para retornar o valor, utilizamos return{[valor a ser retornado, a partir do que foi instruído a função]}
    - String é um vetor de caracteres:
    - .length - tamanho da string
    - .replace([palavra/parte da frase], [substituição])
    - .toUpperCase ( ), MAIÚSCULO; .toLowerCase ( ) minúsculo