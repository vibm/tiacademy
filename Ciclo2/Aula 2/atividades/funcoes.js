//FUNÇÃO PARA SOMAR 2 VALORES
function soma(){
    var x=1; //VAR LOCAL
    var y=2;
    console.log(x+y);
}

//soma(); multiplicação

    //FUNÇÃO QUE RECEBE PARÂMETROS
    function somaPar(x, y){
        var r = x+y;
        console.log(r);
    }

    //somaPar(5, 9);

    function mult(n, o){
        var resultado = (n * o);
        console.log(resultado);
    }
    
    function pot (n, o){
        var resultado = Math.pow(n,o); //ELEVA N a O
        console.log(resultado);
    }

    mult(3,4);
    pot(7,2); // 7 elevado a 2

/* // REDUZIR O CÓDIGO. COLOCAR A FUNÇÃO INTEIRA ENTRE () DEPOIS ();. ISSO JÁ EXECUTA A FUNÇÃO SEM FAZER A CHAMADA DELA
(function respostaF(){
    var nome = "Vinicius";
    alert(nome);
    return nome;
})(); */


//respostaF();
//var d = respostaF();



/* //FUNÇÕES ANÔNIMAS - NÃO DEFINO NOME P/ ELAS
var f = function(){
    alert("Função sem nome")
}

f(); // Chama a variavel que recebeu a função */



//ARROW FUNCTIONS
//tanto as arrow functions quanto as funções anônimas são muito utilizadas em frameworks pois é muito mais limpo, escrevendo menos

/* var ar = ()=>{ alert("ArFunc")}

ar();
 */

    /* //ARROW FUNCTION EXECUTADA DINAMICAMENTE (  () => { } ();  )
    ( ()=>{ alert("ArFunc")} ) (); */

