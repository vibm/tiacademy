// VAR, LET, CONST


var nome="vinicius"; //var global
let sobreNome = "Basseto";

if(true){
    console.log("Var nome= "+ nome);
    var nm = nome;
    console.log("Chamando o sobrenome "+ sobreNome);
    let sn = "Mira";
    console.log(sobreNome);
}

console.log("Meu nome é  "+ nm+" "+sobreNome+" "+sn);
console.log("Var nome= "+ nm);


//OBJETOS - IMPLEMENTAÇÃO DE OBJETOS

var Pessoa = { //essa variavei vai receber alguns valores internos - propriedades
        nome: "Vinicius",
        rua: "Rua A",
        ncasa: "123",
        dados: function(){
            document.write(
                "Nome...:" + this.nome+"<br>"+
                "N....:" + this.rua+"<br>"+
                "N. Casa...:" + this.ncasa+"<br>"

            )
        }
}

Pessoa.dados();

//console.log("Nome "+Pessoa.nome+" Endereço "+Pessoa.rua+" Numero "+Pessoa.ncasa);