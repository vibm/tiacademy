/*  DESAFIO 2

- Utilizar o exercício anterior 
 - verificar se a entrada é um inteiro
 - Enviar um alerta informando que uma string foi enviada
 - Enviar um alerta informando que a string será convertida para número
 - Imprimir os mesmos dados do exercício anterior
 - Posteriormente pedir ao usuário para escolher entre 3 frutas [Laranja, Uva, Pera, Manga] 
 	caso não tenha informa ao usuário de nome (?) que a fruta escolhida não está na lista */


//Pedir nome
var nome = prompt("Digite seu nome");

//Pedir número (mostrando nome)
var numero = prompt (nome + ", digite um número para verificar se ele é inteiro");
console.log(typeof(numero)); //Mostra a string no console

/* //Função para exibir desafio 1
function desafio1 () {
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
    document.write("7. O quadrado do número digitado é: " +quad+ "<br>"); // quadrado do numero 
} */

//verificar se a entrada é um inteiro
if (numero == parseInt(numero)) {
    
    alert("Parece que essa é uma " + typeof(numero));//Alerta informando que uma string foi enviada
    
    alert("Convertendo para um número...")//Alerta informando que a string será convertida para número
    
    numero = parseInt(numero);//conversão string -> int

    console.log(typeof(numero)); //Mostra a conversão para Int no console

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
    document.write("7. O quadrado do número digitado é: " +quad+ "<br>"); // quadrado do numero 
    escolhaFruta();
}
    



function escolhaFruta(){
//pedir ao usuário para escolher entre 3 frutas [Laranja, Uva, Pera, Manga] 
var fruta = prompt("Escolha uma fruta: Manga, Uva ou Pera")
if(fruta == 'Manga' || fruta == 'Uva' || fruta == 'Pera') {
    document.write("<br>Hmm... "+fruta+" é uma boa escolha!");
}else{
    document.write("<br> Desculpe "+nome+", mas "+fruta+" não está na lista");      
}
}