import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import de um {objeto} que vem de 'algum lugar';
import { Alert, Container, Table } from 'reactstrap';
import { api } from '../../../config';

export const VisualizarPedido = () => {

    //iniciar um array vazio que recebe os dados
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    //função assíncrona getPedidos
    const getPedidos = async () => {
        await axios.get(api + "/listapedidos/") //api+'' - concatenou o api que está em config>index.js (localhost:3001) com a listapedidos
            .then((response) => {
                console.log(response.data.pedidos);
                setData(response.data.pedidos);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Sem conexão com a API.'
                })
            });
    }

    //instanciar a função
    useEffect(() => {
        getPedidos();
    }, []);

    return (
        <div className="p-3">
            <Container>
                <h1>Visualizar informações do pedido</h1>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""} {/*se for verdadeiro, mostrar o Alert. se não (':'), não mostra nada */}
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            {/* <th>Cliente ID</th>
                            <th>Serviço ID</th> */}
                            <th>Valor</th>
                            <th>Data</th>
                            <th className="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                {/* <td>{item.clienteid}</td>
                                <td>{item.servicoid}</td> */}
                                <td>{item.valor}</td>
                                <td>{item.data}</td>
                                <td className="text-center">
                                    <Link to={"/pedido/" + item.id}
                                        className="btn btn-outline-primary btnsm">Consultar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

/*<a href="/VisualizarPedido" className="btn btn-outline-success btn-sm">Visualizar Pedido</a>*/