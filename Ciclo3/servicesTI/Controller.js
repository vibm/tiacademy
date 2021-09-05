/* CONSTANTE EXPRESS QUE VAI REQUERER O MÓDULO EXPRESS QUE ESTÁ DENTRO DO node_modules
*/
const express=require('express');


/* UTILIZA O MÓDULO CORS NECESSÁRIA PARA AS REQUISIÇÕES - CORS É UMA FERRAMENTA PARA FAZER ESSAS REQUISIÇÕES P/ SISTEMA ENTRE CLIENTE<>SERVIDOR
*/
const cors=require('cors');

// ./models se refere a pasta models
const models=require('./models');


const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;


/*FUNÇÃO*/
app.get('/', function(req,res){ // EXIBE 'Olá Mundo!' no RAÍZ '/' ---> localhost:3000
    res.send('Olá Mundo!');
});

// localhost:3000/clientes -> cria novo cliente
app.post('/clientes', async(req,res)=>{ 
    let create=await cliente.create(
        req.body
    );
    res.send('Novo cliente registrado');
});


// localhost:3000/pedidos -> cria novo pedido
app.post('/pedidos', async(req, res)=>{ 
    let create=await pedido.create(
        req.body
    );    
    res.send('Novo pedido feito');
});

// localhost:3000/servicos -> cria novo serviço
app.post('/servicos', async(req, res)=>{
    let create=await servico.create(
        req.body
    );
    res.send('Serviço foi inserido');
});





/*FINAL DA APLICAÇÃO (let em diante)*/
let port=process.env.PORT || 3000 // var port que recebe do ambiente uma porta OU vai funcionar na porta 3000

//toda vez que eu tenho uma porta onde eu passo as minhas requisições, respostas, etc, o meu servidor vai ouvir se deu certo ou não \/
app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
})