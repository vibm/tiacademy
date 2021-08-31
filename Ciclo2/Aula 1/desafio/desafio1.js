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