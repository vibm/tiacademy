/*
DESAFIO 1

INSTRUÇÕES 
1. Ao abrir o navegador deverá apresentar uma janela para que digite o nome;
2. O nome digitado deverá aparecer na segunda janela que irá pedir um número;
3. Será impresso o nome conforme no exemplo do desafio;
4. Será impresso o valor digitado entre parênteses;
5. Irá retornar um valor de comparação resultando em um booleano;
6. Será efetuado a soma;
7. Irá retornar o resto da divisão;
8. Irá retornar o quadrado do valor digitado;
*/


/*

USEI O 3º MÉTODO. 
1º FAZENDO AS OPERAÇÕES DIRETAMENTE COM DOCUMENT.WRITE, 
2º FIZ AS OPERAÇÕES EM NOVAS VARIÁVEIS, PARA DEPOIS IMPIRMÍ-LAS COM DOCUMENT.WRITE
3º UM NÚMERO DIGITADO E UM NÚMERO 'N' DEFINIDO POR MIM DEVEM SER COMPARADOS, SOMADOS, DIVIDIDOS E MOSTRAR O RESTO.

*/


/*
//VARIÁVEIS USADAS EM TODOS OS MÉTODOS
//DIGITAR O NOME
var nome = prompt("Digite seu nome");

//DIGITAR UM NÚMERO JÁ MOSTRANDO O NOME NO PROMPT
var numero = parseInt(prompt (nome + " digite um número para comparar com " + x));//Usei parseInt aqui para não concatenar a soma no item 4. Fiz também de outra forma no método 1 (VER *** )
*/


 
/* //1. SEM CRIAR VARIÁVEIS ALÉM DO NOME E NUMERO

//MOSTRAR NO DOC HTML
document.write("1. Seja bem-vindo(a): " + nome + "<br>");
document.write("2. Você digitou o número " + "(" + numero + ")" + "<br>");
document.write("3. O retorno da comparação booleana é: " + (numero == numero) + "<br>");
document.write("4. A soma dos valores é: " + (numero + numero) + "<br>");

// *** Caso não usasse 'parseInt' na 'var numero', usaria parseInt aqui (abaixo) pois estava concatenando 3 como string (33). Solução, parseInt em cada numero separado, depois somar tudo entre parenteses. Tire o comentário abaixo, e o parseInt acima para ver \/
//document.write("4. A soma dos valores é: " + (parseInt(numero) + parseInt(numero)) + "<br>"); 

document.write("5. A subtração dos valores é: " + (numero - numero) + "<br>");
document.write("6. O resto da divisão é de: " + (numero % numero) + "<br>");
document.write("7. O quadrado do número digitado é: " + (numero * numero) + "<br>");  
 */



 /*//2. CRIANDO VARIÁVEIS ADICIONAIS PARA FAZER AS OPERAÇÕES

var comp = numero == numero; //comparação - booleana
var soma = numero + numero; // soma
var sub = numero - numero; // subtração
var resto = numero % numero; //resto da divisão
var quad = numero * numero; // quadrado do numero

document.write("1. Seja bem-vindo(a): " + nome + "<br>");
document.write("2. Você digitou o número " + "(" + numero + ")" + "<br>");
document.write("3. O retorno da comparação booleana é: " +comp+ "<br>"); //comparação - booleana
document.write("4. A soma dos valores é: (" +soma+ ")<br>"); // soma
document.write("5. A subtração dos valores é: " +sub+ "<br>"); // subtração
document.write("6. O resto da divisão é de: " +resto+ "<br>"); // resto da divisão
document.write("7. O quadrado do número digitado é: " +quad+ "<br>"); // quadrado do numero */



//3. DEFININDO OUTRO NÚMERO PARA FAZER AS OPERAÇÕES COM O NÚMERO DIGITADO
//NÚMERO QUE SERÁ COMPARADO COM O Nº DIGITADO DEPOIS
var x = 5;
//DIGITAR O NOME
var nome = prompt("Digite seu nome");

//DIGITAR UM NÚMERO JÁ MOSTRANDO O NOME NO PROMPT
var numero = parseInt(prompt (nome + " digite um número para comparar com " + x));//Usei parseInt aqui para não concatenar a soma no item 4. Fiz também de outra forma no método 1 (VER *** )



var comp = numero == x; //comparação - booleana
var soma = numero + x; // soma
var sub = numero - x; // subtração
var resto = numero % x; //resto da divisão
var quad = numero * numero; // quadrado do numero

document.write("1. Seja bem-vindo(a): " + nome + "<br>");
document.write("2. Você digitou o número " + "(" + numero + ")" + "<br>");
document.write("3. O retorno da comparação booleana é: " +comp+ "<br>"); //comparação - booleana
document.write("4. A soma dos valores é: (" +soma+ ")<br>"); // soma
document.write("5. A subtração dos valores é: " +sub+ "<br>"); // subtração
document.write("6. O resto da divisão é de: " +resto+ "<br>"); // resto da divisão
document.write("7. O quadrado do número digitado é: " +quad+ "<br>"); // quadrado do numero 