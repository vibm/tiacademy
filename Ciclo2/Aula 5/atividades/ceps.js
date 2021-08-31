window.onload=function(){
	//alert("Teste");


	const btnBuscaCep=document.querySelector("#btnBuscaCep");
	const cxCep=document.querySelector(".cxCep");

	const dadosCep=async function(cepUrl){

		var url=`https://viacep.com.br/ws/${cepUrl}/json/`;
		var consultaCep=await fetch(url);
		var dadoCep=await consultaCep.json()
		//console.log(consultaCep);
		//console.log(dadoCep);

		for(var campino in dadoCep){
			console.log(campino);
			if(document.querySelector("#"+campino)){
			document.querySelector("#"+campino).value=dadoCep[campino];
			}
		}
	}

	btnBuscaCep.addEventListener("click",()=>{
		
		let cep=cxCep.value;
		dadosCep(cep);


		
		//console.log(url);		
	})
}