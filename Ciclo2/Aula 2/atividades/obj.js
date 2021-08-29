// VAR, LET, CONST

var nome="vinicius"; //VAR GLOBAL
let sobreNome = "Basseto";

if(true){
    console.log("Var nome= "+ nome);
    var nm = nome;
    console.log("Chamando o sobrenome "+ sobreNome);
    
    
    // IMPORTANTE - QUANDO LET É CRIADA DENTRO DE UM ESCOPO ELA SÓ PODE SER USADA DENTRO DAQUELE ESCOPO. MAS SE ELA FOI CRIADA FORA, ELA PODE SER USADA DENTRO.
    let sn = "Mira";
    console.log(sobreNome);
}

console.log("Meu nome é  "+ nm+" "+sobreNome+" "+sn);
console.log("Var nome= "+ nm);




//OBJETOS - IMPLEMENTAÇÃO DE OBJETOS

var Pessoa = { //essa variável vai receber alguns valores internos - propriedades
        nome: "Vinicius",
        rua: "Rua A",
        ncasa: "123",
        dados: function(){
            document.write( // THIS = REFERENCIA ELA MESMA DENTRO DO PRÓPRIO OBJETO
                "Nome...:" + this.nome+"<br>"+
                "N....:" + this.rua+"<br>"+
                "N. Casa...:" + this.ncasa+"<br>"

            )
        }
}

Pessoa.dados();

//console.log("Nome "+Pessoa.nome+" Endereço "+Pessoa.rua+" Numero "+Pessoa.ncasa);