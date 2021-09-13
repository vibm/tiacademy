import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from 'reactstrap';

import { api } from '../../../config';

export const VisualizarServico = () => {

   
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    
    const apagarServicos = async (idServico) => {
        console.log(idServico)

        const headers = {
            'Content-Type':'application/json'
        };

        await axios.delete(api + "/apagarservico/"+idServico, {headers}) //NÃO TEM apagarcliente NO CONTROLLER.JS
            .then((response) => {
                console.log(response.data.servicos);
                setData(response.data.servicos);
                getServicos();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Sem conexão com a API.'
                })
            });
    }

    useEffect(() => {
        getServicos();
    }, []);
    

    return (
        <div className="p-3">
            <Container>                
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""} <div className="d-flex">
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
                                    <Link to={"/editarservico/"+item.id}
                                    className="btn btn-outline-warning btn-sm">Editar</Link>
                                    <span className="btn btn-outline-danger btn-sm mr-1"
                                        onClick={()=> apagarServico(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};