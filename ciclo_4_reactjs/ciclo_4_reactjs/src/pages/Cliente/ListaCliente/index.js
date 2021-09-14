import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import de um {objeto} que vem de 'algum lugar';
import { Alert, Container, Table } from 'reactstrap';

import { api } from '../../../config';

export const ListaCliente = () => {

    //iniciar um array vazio que recebe os dados
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    //função assíncrona getClientes
    const getClientes = async () => {
        await axios.get(api + "/listaclientes") //api+'' - concatenou o api que está em config>index.js (localhost:3001) com a listaclientes
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes);
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
        getClientes();
    }, []);

    return (
        <div className="p-3">
            <Container>
                <h1>Visualizar informações do cliente</h1>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""} {/*se for verdadeiro, mostrar o Alert. se não (':'), não mostra nada */}
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Nascimento</th>
                            <th className="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.endereco}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td>{item.nascimento}</td>
                                <td className="text-center">
                                    <Link to={"/cliente/"+item.id} className="btn btn-outline-primary btnsm">Consultar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};
/* import { Container } from 'reactstrap';

export const VisualizarCliente = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Página do Cliente</h1>
                    </div>
                    <div className="p-2">
                    </div>
                </div>
            </Container>
        </div>
    );
}; */

/*
export const VisualizarCliente = () =>{
    return(
        <div>
            <h1>Página do Cliente</h1>
        </div>
    )
}
*/

/* ESTAVA ENTRE A DIV "p-s"
<a href="/VisualizarCliente" className="btn btn-outline-success btn-sm">Visualizar Cliente</a>
*/