/* ARRAYS */






/* concat( )  
JUNTA OS ELEMENTOS DE DOIS OU MAIS ARRAYS E RETORNA UMA CÓPIA COM OS ELEMENTOS JUNTOS*/
var frutas= ["Uva","Banana","Maçã","Melão"]; //var frutas = Array()
console.log(`Quantidade do array: ${frutas.length} fruta: ${frutas[0]}`); //frutas[0] 'chama' o indice 0 do array 'frutas'

//concat()
var frutas2 = ["Abacate","Pera","Laranja"];
var todasAsFrutas = frutas.concat(frutas2);
console.log(frutas);
console.log(frutas2);
console.log(todasAsFrutas);






/* indexOf()  
PROCURA POR UM ELEMENTO ESPECÍFICO NO ARRAY E RETORNA A SUA POSIÇÃO */
var retornoIndexOf = todasAsFrutas.indexOf("Banana");
console.log(retornoIndexOf); //1






/* join()
JUNTA TODOS OS ELEMENTOS DE UM ARRAY EM UMA STRING */
var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray); //Uva,Banana,Maçã,Melão,Abacate,Pera,Laranja






/*push()
INSERE UM NOVO ELEMENTO NO FINAL DO ARRAY */
var outraLista = ["Bola","Peteca"];
var novaLista = outraLista.push("Boneca","Qualquer brinquedo");

console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3]);






/*pop()
/REMOVE O ÚLTIMO ELEMENTO DO ARRAY */
console.log(outraLista.pop()); //removeu Qualquer brinquedo
console.log(outraLista); //mostra outraLista sem Qualquer brinquedo






/*reverse()
INVERTE A ORDEM DOS ELEMENTOS DO ARRAY*/
console.log(outraLista.reverse());





/* shift()
 REMOVE O PRIMEIRO ELEMENTO DO ARRAY*/
var removerPrimeiro = ["Fusca","Variante"];
removerPrimeiro.shift();
console.log(removerPrimeiro);






 /* sort()
 ORDENA OS ELEMENTOS DO ARRAY EM ORDEM CRESCENTE */
var alfa = ["b","z","t","a"];
alfa.sort();//ORDENOU ALFABETICAMENTE
console.log(alfa); 

var numeros = [3,2,55,1];
numeros.sort();//ORDENOU NUMERICAMENTE - PORÉM NÃO É TÃO CONFIÁVEL (?)
console.log(numeros);





 /*toString()
 CONVERTE UM ARRAY EM STRING E RETORNA ESSA STRING */
//vide join






 /* unshift()
 INSERE UM NOVO ELEMENTO NO INICIO DO ARRAY */
alfa.unshift(10);
console.log(alfa);





 /* splice()
CORTA O ARRAY EM UM PONTO INDICANDO DOIS PARAMETROS (INDICES) E QUANTOS ELEMENTOS QUER REMOVER A PARTIR DA POSIÇÃO */
var f= ["Uva","Banana","Maçã","Melão"];

f.splice(1, 2);
console.log(f);





 /* ARRAYS DE OBJETOS */

 var dados = [
                {nome:"Marcelo"},
                {nome:"Raphael"}
 ]
 //console.log(dados[0].nome);
 //console.log(dados[1].nome);


///
function Pessoa2(nome, sobrenome, idade, doc=[]){
        
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.doc = {  
            rg: doc[0], 
            cpf: doc[1] //Mostra CPF - pois ali embaixo 'pessoa2.doc.cpf'
    }
}

var pessoa2 = new Pessoa2("Raphael","","",['22','555']);
console.log(`Nome ${pessoa2.nome} - CPF: ${pessoa2.doc.cpf}`);