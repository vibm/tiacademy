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


// localhost:3000/servicos -> cria novo serviço
app.post('/servicos', async(req, res)=>{
    let create=await servico.create(
        req.body
    );
    res.send('Serviço foi inserido');
});


// localhost:3000/pedidos -> cria novo pedido
app.post('/pedidos', async(req, res)=>{ 
    let create=await pedido.create(
        req.body
    );    
    res.send('Novo pedido feito');
});


//criei nova rota 'listaservicos' - Encontra todos os serviços
app.get('/listaservicos', async(req, res)=>{
    await servico.findAll({
        order: [['nome', 'DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

//criei nova rota 'ofertas' - Conta quantos serviços tem
app.get('/ofertas', async(req, res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json({servicos});
    });    
});

// :id é um parametro usado ali embaixo
app.get('/servico/:id', async(req,res)=>{
    servico.findByPk(req.params.id)
    .then(servico =>{
        return res.json({
            error: false,
            servico
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Código não está cadastrado!"
        });
    });
});









/*EXERCÍCIOS AULA 4*/

// 1. Visualize todos os clientes ---OK
app.get('/listaclientes', async(req, res)=>{
    await cliente.findAll({
        raw:true
    }).then(function(clientes){
        res.json({clientes})
    });
});

// 2. Visualize os clientes em ordem de antiguidade. ---OK
app.get('/listaclientesold', async(req, res)=>{
    await cliente.findAll({
        order: [['createdAt']] 
    }).then(function(clientes){
        res.json({clientes})
    });
});

// 3. Visualize todos os pedidos. ---OK
app.get('/listapedidos',async(req, res)=>{
    await pedido.findAll({
        raw: true
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

// 4. Visualize o pedido por ordem a partir do maior valor. ---OK
app.get('/listapedidosmaiorvalor',async(req, res)=>{
    await pedido.findAll({
        order:[['valor','DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });
});


// 5. Informe quantos clientes estão na nossa base de dados. ---OK
app.get('/quantidadeclientes', async(req, res)=>{
    await cliente.count('id')
    .then(function(clientes){
        res.json({clientes});
    });    
});

// 6. Informe a quantidade de pedidos solicitados. ---
app.get('/quantidadepedidos', async(req, res)=>{
    await pedido.count('id')
    .then(function(pedidos){
        res.json({pedidos});
    });    
});


/* DESAFIO AULA 4
    Qual é o valor total que o cliente X gastou na ServicesTI?
    await User.sum('age', { where: { age: { [Op.gt]: 5 } } }); // 50
*/
app.get('/totalCliente/:id', async(req,res)=>{
    await pedido.sum('valor', { where: { ClienteId: { [Op.gt]:req.params.id } } })
    .then(function(totalCliente){res.json({totalCliente})
    });
}); 






/*FINAL DA APLICAÇÃO (let em diante)*/
let port=process.env.PORT || 3000 // var port que recebe do ambiente uma porta OU vai funcionar na porta 3000

//toda vez que eu tenho uma porta onde eu passo as minhas requisições, respostas, etc, o meu servidor vai ouvir se deu certo ou não \/
app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
})