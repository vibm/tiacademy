/* constante express que vai requerer o módulo express que está dentro do node_modules
*/
const express = require('express');

/* utiliza o módulo cors necessária para as requisições - cors é uma ferramenta para fazer essas requisições p/ sistema entre cliente<>servidor
*/
const cors = require('cors');

// ./models se refere a pasta models
const models = require('./models');


const app = express();
app.use(cors());
app.use(express.json());

//uma variável para cada objeto
let cliente = models.Cliente;
let servico = models.Servico;
let pedido = models.Pedido;


/*    -_-_-_-_- ROTAS (aparecem no mySQL) -_-_-_-_-      */

// exibe 'olá mundo!' na raíz '/' de localhost:3001
app.get('/', function (req, res) {
    res.send('Olá Mundo!');
});

// cria novo cliente -> localhost:3001/clientes
app.post('/clientes', async (req, res) => {
    let create = await cliente.create(
        req.body
    ).then(function () {
        return res.json({
            error: false,
            message: "Cliente criado com sucesso!"
        })
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro no cadastro do cliente."
        })
    })
});


// cria novo serviço -> localhost:3001/servicos
app.post('/servicos', async (req, res) => {
    let create = await servico.create(
        req.body
    ).then(function () {
        return res.json({
            error: false,
            message: "Serviço criado com sucesso!"
        })
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro no cadastro do serviço."
        })
    });
});


// cria novo pedido -> localhost:3001/pedidos
app.post('/pedidos', async (req, res) => {
    let create = await pedido.create(
        req.body
    );
    res.send('Novo pedido feito');
});


//criei nova rota 'listaservicos' - Encontra todos os serviços
app.get('/listaservicos', async (req, res) => {
    await servico.findAll({
        order: [['nome', 'DESC']]
    }).then(function (servicos) {
        res.json({ servicos })
    });
});

//criei nova rota 'ofertas' - Conta quantos serviços tem
app.get('/ofertas', async (req, res) => {
    await servico.count('id')
        .then(function (servicos) {
            res.json(servicos);
        });
});

// :id é um parametro usado ali embaixo
app.get('/servico/:id', async (req, res) => {
    servico.findByPk(req.params.id)
        .then(servico => {
            return res.json({
                error: false,
                servico
            });
        }).catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: "Código não está cadastrado!"
            });
        });
});

app.get('/atualizaservico', async (req, res) => {
    await servico.findByPk(1)
        .then(servico => {
            servico.nome = 'HTML/CSS/JS';
            servico.descricao = 'Páginas estáticas e dinâmicas estilizadas';
            servico.save();
            return res.json({ servico })
        });
});

// faz o update
app.put('/editarservico', async (req, res) => {
    servico.update(req.body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});

// busca pedidos com base em um serviço
app.get('/servicospedidos', async (req, res) => {
    await servico.findByPk(1, {
        include: [{ all: true }]
    }).then(servico => {
        return res.json({ servico });
    })
});

//atualização - editar o pedido
app.put('/editarpedido', async (req, res) => {
    pedido.update(req.body, {
        where: { ServicoId: req.body.ServicoId }
    }).then(function () {
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        });
    });
});


//EXCLUSÃO
app.get('/excluircliente', async (req, res) => {
    await cliente.destroy({
        where: { id: 2 }
    });
});

app.delete('/apagarcliente/:id', (req, res) => {
    cliente.destroy({
        where: { id: req.params.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Cliente foi excluido com sucesso"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o cliente."
        });
    });
});


/*EXERCÍCIOS AULA 4*/

// 1. Visualize todos os clientes ---OK
app.get('/listaclientes', async (req, res) => {
    await cliente.findAll({
        raw: true
    }).then(function (clientes) {
        res.json({ clientes })
    });
});
// 2. Visualize os clientes em ordem de antiguidade. ---OK
app.get('/listaclientesold', async (req, res) => {
    await cliente.findAll({
        order: [['createdAt']]
    }).then(function (clientes) {
        res.json({ clientes })
    });
});
// 3. Visualize todos os pedidos. ---OK
app.get('/listapedidos', async (req, res) => {
    await pedido.findAll({
        raw: true
    }).then(function (pedidos) {
        res.json({ pedidos })
    });
});
// 4. Visualize o pedido por ordem a partir do maior valor. ---OK
app.get('/listapedidosmaiorvalor', async (req, res) => {
    await pedido.findAll({
        order: [['valor', 'DESC']]
    }).then(function (pedidos) {
        res.json({ pedidos })
    });
});
// 5. Informe quantos clientes estão na nossa base de dados. ---OK
app.get('/quantidadeclientes', async (req, res) => {
    await cliente.count('id')
        .then(function (clientes) {
            res.json({ clientes });
        });
});
// 6. Informe a quantidade de pedidos solicitados. ---
app.get('/quantidadepedidos', async (req, res) => {
    await pedido.count('id')
        .then(function (pedidos) {
            res.json({ pedidos });
        });
});

/* DESAFIO AULA 4
    Qual é o valor total que o cliente X gastou na ServicesTI?
    await User.sum('age', { where: { age: { [Op.gt]: 5 } } }); // 50
*/
app.get('/totalCliente/:id', async (req, res) => {
    await pedido.sum('valor', { where: { ClienteId: { [Op.gt]: req.params.id } } })
        .then(function (totalCliente) {
            res.json({ totalCliente })
        });
});

/**EXERCÍCIOS AULA 5
 1. Faça uma busca por serviços de clientes passando o id do cliente no corpo da requisição

 2. Utilize a rota para consultar clientes e faça a edição de um cliente pelo método 'put'

 3. Utilize a rota para consultar pedidos e faça a edição de um pedido pelo método 'put'
 */

// 1. 
app.get('/servicosclientes', async (req, res) => {
    await cliente.findByPk(1, {
        include: [{ all: true }]
    }).then(cliente => {
        return res.json({ cliente });
    })
});

// 2. 
app.put('/editarcliente', async (req, res) => {
    cliente.update(req.body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Cliente modificado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o cliente."
        });
    });
});

// 3. já criado na linha 125
/*app.put('/editarpedido', async (req, res)=>{
    pedido.update(req.body, {
        where: {ServicoId: req.body.ServicoId}
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function(erro){
            return res.status(400).json({
                error: true,
                message: "Não foi possível modificar o pedido."
        });
    });
});
*/



/*FINAL DA APLICAÇÃO (let em diante)*/
let port = process.env.PORT || 3001 // var port que recebe do ambiente uma porta OU vai funcionar na porta 3001

//toda vez que eu tenho uma porta onde eu passo as minhas requisições, respostas, etc, o meu servidor vai ouvir se deu certo ou não \/
app.listen(port, (req, res) => {
    console.log('Servidor ativo');
})






/*

TOTAL DE ROTAS CRIADAS:  22

*/