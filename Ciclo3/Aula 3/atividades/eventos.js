/*click AO CLICAR EM ALGUM ELEMENTO HTML
mousemove AO MOVER O CURSOR DO MOUSE ACESSA (ENTRA) O ELEMENTO
mouseover AO MOVER O CURSOR DO MOUSE DENTRO DO ELEMENTO
mouseout AO MOVER O CURSOS PARA FORA DO ELEMENTO
dbclick AO DAR DOIS CLIQUES (RÁPIDO) SOBRE O ELEMENTO
blur AO PERDER O FOCO DO ELEMENTO, GERALMENTE ASSOCIADO AO ELEMENTO HTML TEXT */

//EVENTO ONCLICK
window.onload = function(){

    //alert("alerta");
    const btn1 = document.querySelector(".btn-click"); //ALVO BTN
    const legP = document.querySelector(".legenda"); //ALVO LEGENDA
    const cxTexto = document.querySelector("#texto")
    btn1.addEventListener('click', ()=>{
        //escrever no elemento - enviar uma string
        legP.innerHTML += cxTexto.value;

    })
    legP.addEventListener('click',()=>{
        legP.innerHTML ='';
    })




//MOUSEMOVE
/* legP.addEventListener('mousemove',()=>{
    alert("Teste");
}) */


//MOUSEOVER
/* legP.addEventListener('mouseover',()=>{
    alert("Teste");
}) */


//MOUSEOUT
/* legP.addEventListener('mouseout',()=>{
    alert("Teste");
}) */




/* TROCAR TIPO DO ELEMENTO*/
const trocaSenha = document.querySelector("#verSenha");
const cxSenha    = document.querySelector("#senha");
trocaSenha.addEventListener('click', ()=>{
    //O ELEMENTO cxSenha É UM ELEMENTO DO TIPO PASSWORD?
    //DUAS MANEIRAS PARA VER ISSO \/
    // getAttribute() - pegaro o tipo do elemento
    // setAttribute() - atribui um tipo ao elemento
    
    if(cxSenha.getAttribute('type') =='password'){
        cxSenha.setAttribute('type','text')
    } else {
        cxSenha.setAttribute('type','password')
        
    }
       
});

//ALTERAR BG CAIXA DE TEXTO

const cxTrocaBg = document.querySelector("#cxTbg");

     cxTrocaBg.addEventListener("blur", ()=>{
     cxTrocaBg.setAttribute("class", ".corBg");
 });
}