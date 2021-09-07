/* OBJETOS */

function Pessoa(nome, sobrenome, idade){
    // PARA ACESSAR ESSA FUNÇÃO COMO SE FOSSE UM OBJETO, VAMOS FAZER REFERÊNCIA AOS ATRIBUTOS DESSE OBJETO
    
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}


// PARA CRIAR UM OBJETO VAMOS USAR O NEW
var ps1 = new Pessoa("Raphael", "Da Silva", 7); //construtor
console.log("Pessoa 1 Nome "+ ps1.nome+" "+ps1.sobrenome+" idade: "+ps1.idade);

var ps2 = new Pessoa("Maria");
console.log("Pessoa 2 Nome "+ps2.nome+" "+ps2.sobrenome); // SOBRENOME É UNDEFINED POIS SÓ DEFINIU MARIA




// OUTRAS FORMAS DE CRIAR OBJETOS DENTRO DO JAVASCRIPT
//FORMA SIMPLES

var objPessoa = { rg: '7767', cpf: '8989'}  // É UM OBJETO - var objPessoa = {}
//console.log(typeof(objPessoa))
console.log( "RG: "+ objPessoa.rg);


function Pessoa2(nome, sobrenome, idade){
        
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.doc = {  //
            rg: '777',
            cpf: '8989'
    }
}

var pessoa2 = new Pessoa2("Raphael");
//console.log("Nome "+pessoa2.nome+" "+pessoa2.doc.rg); //pessoa.doc.rg ACESSA O RG SEM PRECISAR ESTAR NO PARÂMETRO DA FUNÇÃO


// TEMPLATE STRING 
//concatenar sem o + ------- `${}` (acento grave)

console.log(`Nome ${pessoa2.nome} - RG: ${pessoa2.doc.rg}`);

