/*var nome="Marcelo";
console.log(nome.length);
console.log(nome[0]); //retorna a primeira letra do nome*/


//match
/*O método match() procura uma palavra em uma string.
Existe alguns parâmetros de pesquisa que permitem uma maior precisão conforme a [omitido na tela do professor]
flags g / i / m
*/


/*var palavras="Maçâ doce";
console.log(palavras.match(/D/gi));*/


//search
/*O método search() procura pela ocorrência e retorna a posição na cadeia da
string, a posição é em relação ao primeiro caractere da ocorrência*/


/*var palavras="Maçâ doce";
console.log(palavras.search(/D/gi));*/


//replace
/*O método replace() substitui uma string por outra, simples assim,
ele pesquisa a string informada, como no método "match" e a substitui
por outra string nas aspas informada como segundo parâmetro*/


/*var str=`Lorem ipsum, dolor sit amet consectetur, adipisicing elit.\nNumquam nobis, nemo assumenda at qui soluta delectus tenetur voluptatem.`
var mudarStr=str.replace(/voluptatem/gi,"Xxxxx");
console.log(mudarStr);*/


//localeCompare
/*O método localeCompare() efetua a comparação entre duas strings,
se estas forem iguais o retorno será "0" zero. Os valores -1 e 1 podem ser
esperados caso elas não sejam iguais.*/


/*var comp1="Comparar";
var comp2="comparar";
var c1=comp1.toLowerCase();
var c2=comp2.toLowerCase();
console.log(c1);
console.log(c2);
var comparacao=c1.localeCompare(c2);
console.log(comparacao);*/


//trim
/*O método trim() faz a remoção de espaços antes e depois da string especificada*/

/*var p="  fpalavra+ ";
var r=p.trim();
console.log(r);
var s=r.replace(/f/gi, "");
console.log(s);
var sub_a=s.replace(/a[+]/gi, "a");  //também funcionaria (/a\+/gi, "a") ou ("a+", "a")
console.log(`Removido: ${sub_a}`);*/


//toLocaleString
//formatação de moedas
/*var valor=1.357 //1,35
var formatarMoeda=valor.toLocaleString("pt-BR",{
	style:"currency",
	currency:"BRL"
});
console.log(formatarMoeda);*/