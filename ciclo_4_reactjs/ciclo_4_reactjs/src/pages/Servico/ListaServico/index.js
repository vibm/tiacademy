// ListaServico (VisualizarServico) mostra a lista dos serviços
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import de um {objeto} que vem de 'algum lugar';
import { Alert, Container, Table } from 'reactstrap';

import { api } from '../../../config';

export const ListaServico = () => {

    //iniciar um array vazio que recebe os dados
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    //função assíncrona apagarServicos
    const apagarServico = async (idServico) => {
        console.log(idServico);

        
        const headers = {
            'Content-Type': 'application/json'
        };


        //api+'' /apagarservico/:id em Controller.js
        //headers = informações dentro do formulário
        await axios.delete(api + "/apagarservico/"+idServico, {headers}) 
            .then((response) => {
                console.log(response.data.error);
                getServicos();
               /*  setData(response.data.servicos); PROFESSOR NAO USOU ISSO */
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
                {/* {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""} se for verdadeiro, mostrar o Alert. se não (':'), não mostra nada  ----- IGUAL A LINHA 54*/}

                 <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Visualizar Informações do Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/cadastrarservico" className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                </div>

                 {status.type ==='error' ? <Alert color="danger">{status.message}</Alert> : ""}

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
                                    <Link to={"/servico/"+item.id} className="btn btn-outline-primary btn-sm m-1">Consultar</Link>
                                    <Link to={"/editar-servico/"+item.id}
                                    className="btn btn-outline-warning btn-sm">Editar</Link>
                                    <span className="btn btn-outline-danger btn-sm m-1"
                                        onClick={() => apagarServico(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};