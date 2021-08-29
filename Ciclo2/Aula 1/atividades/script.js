/* BLOCO DE COMENTÁRIO
1ª Aula de JS - 16/08/2021
*/

//LINHA DE COMENTARIO


/* PARTE I

// TIPAGEM DINÂMICA - Característica do JavaScript (e de outras linguagens) que pode concatenar dados diferentes
var nome = "Vinicius"; //string
console.log(nome);

var nome = 12; //number
console.log(nome);


//COMO SABER O TIPO DE DADO
var nome = 12;
console.log(typeof(nome)); //typeof();

//TER SAIDA DE DADOS PELO NAVEGADOR - FORMA MAIS RUDIMENTAR

//Concatenar valores/string (dado)
document.write("Idade " + nome + "<br>"); //DOCUMENTE.WRITE - Mostra no doc. HTML
*/

/*PARTE II
var fruta = "Laranja";
var oque = "doce";
var tudoJunto = fruta+" "+oque;
//console.log(tudoJunto);

var valor1 = 1;
var valor2 = 2;
var total = valor1+valor2;

document.write(total);
console.log(valor1 + valor2);
*/ 

/*
//PREVINIR CONFUSÃO EM TIPOS DE DADOS
var valor1 = parseInt('1'); //string parseInt() transforma string com numero, em tipo number Int
var valor2 = 2; //number
var total = valor1+valor2;

document.write(total);
console.log(valor1 + valor2);
*/

//COMPARAÇÕES entre valores

//ARITMÉTICOS
    var valor1 = '2'; 
    var valor2 = 2; 
    var total = valor1 + valor2;
    document.write(total); //saindo no html
    console.log(valor1 + valor2); //console do navegador (F12)

    //MODULO - ÚTIL PARA DESCOBRIR SE O Nª É PAR/ÍMPAR, SE É DIVISOR
    var i = 2;
    var j = 2;
    console.log(i % j); 

    //MULTIPLICAÇÃO
    var x = 3;
    var y = 2;
    console.log(x * y);

//COMPARADORES
    var v = (valor1 == valor2); // == COMPARA SE VALORES SÃO IGUAIS
    console.log(v); //navegador não ve que são diferentes


    //ESTRITAMENTE IDENTICO '==='
    var v = (valor1 == valor2); // == COMPARA SE VALORES SÃO IGUAIS
    console.log(v);

    var v = (valor1 === valor2); // == COMPARA SE VALORES SÃO ESTRITAMENTE IGUAIS
    console.log(v);


