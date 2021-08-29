/*

Estrutura de condições e operadoes

lógicos
==
===
!=
!==
<
>
<=
>=

*/

//(==) igualdade
//INICIALIZAR UMA VAR = ATRIBUIR UM VALOR À ELA

 //SE NÃO COLOCAR NENHUM VALOR, É CONSIDERADA UNDEFINED, POR ISSO var v1; == var v2; DÁ TRUE
/* var v1=1;
var v2=2;

if (v1 == v2) {
    console.log("Sim, é verdade");
} else{
    console.log("Isso é falso")
} */



// (===) identico
//SE NÃO COLOCAR NENHUM VALOR, É CONSIDERADA UNDEFINED, POR ISSO var v3; === var v4; DÁ TRUE

/* var v3=1; 
var v4=1;

if (v3 === v4){
    console.log("V3 é exatamente igual a V4");
    console.log(typeof(v4));
}
else{
    console.log("v3 não é igual v4")
    console.log(typeof(v3));
}
 */



//!= diferente
/* var v5=1;
var v6=0;

if(v5 != v6) {
    console.log("V5 é diferente de v6");
}   else{
    console.log("São iguais");
} */



//!== exatamente diferente
/* var v7=1;
var v8=3;
if(v7 !== v8){
    console.log("Exatamente diferentes");
}else{
    console.log("São iguais");
} */



// <  menor que
/* var va=700;
var vb=400;
if (va < vb){
    console.log("va é menor que vb");
}else{
    console.log("vb é menor que va");
} */



// >  maior que
/* var va=700;
var vb=400;
if (va > vb){
    console.log("va é maior que vb");
}else{
    console.log("vb é maior que va");
} */



// <= menor ou igual que
/* var vc=400;
var vd=399;
if (vc <= vd){
    console.log("vc="+vc+" é menor ou igual que vd="+vc);
} */



// >= maior ou igual que
/* var ve=400;
var vf=444;
if (ve >= vf){
    console.log("ve="+ve+" é maior ou igual que vf="+vf);
}
 */



/* if / else e Operadores Lógicos
AND &&&
OR ||
NOT !
*/

/* // && Todas as condições precisam ser atendidas
var a=0;
var b=0;
if(a==0 && b==0) {
    console.log("Verdadeiro");
}else{
    console.log("Falso");
} */




/* // || logical OR
var c=0;
var d=1;
if (c==0 || d==1) {
    console.log("Ok");
} else{
    console.log("Não OK (!OK)");
} */

/* //! NOT - NEGAÇÃO
var s = 1;

if(!typeof(s)){
    console.log("Não é um string")
}else{
    console.log("É um string")
    console.log(typeof(s));
} */

/* //SWITCH

var op=3;

switch(op){
    case 1:
        alert("Estou sendo enviado pelo case 1");
    break;

    case 2:
        console.log("Cai dentro do case 2");
    break;

    case 3:
        console.log("Cai dentro do case 3");
    break;

    default:
        console.log("Nenhuma das opções");
    break;
}
 */