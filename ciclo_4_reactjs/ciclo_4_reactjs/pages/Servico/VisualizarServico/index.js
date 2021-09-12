import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import de um {objeto} que vem de 'algum lugar';
import { Alert, Container, Table } from 'reactstrap';

import { api } from '../../../config';

export const VisualizarServico = () => {

    //iniciar um array vazio que recebe os dados
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    //função assíncrona getServicos
    const getServicos = async () => {
        await axios.get(api + "/listaservicos") //api+'' - concatenou o api que está em config>index.js (localhost:3001) com a listaservicos
            .then((response) => {
                console.log(response.data.servicos);
                setData(response.data.servicos);
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
        getServicos();
    }, []);

    return (
        <div className="p-3">
            <Container>                
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""} {/*se for verdadeiro, mostrar o Alert. se não (':'), não mostra nada

                 */}<div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/cadastrarservico" className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                </div>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Serviço</th>
                            <th>Descrição</th>
                            <th className="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center">
                                    <Link to={"/servico/"+item.id} className="btn btn-outline-primary btnsm">Consultar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};