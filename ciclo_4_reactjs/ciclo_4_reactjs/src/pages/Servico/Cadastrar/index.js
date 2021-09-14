import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner, Table, } from 'reactstrap'; /* NÃO UTILIZADOS? Alert, Container, Table*/
import { api } from '../../../config';
//SPINNER NÃO IMPORTADO


export const Cadastrar = () => {

    const [servico, setServico] = useState({
        nome: '',
        descricao: ''
    });

    const [data, setData] = useState([]);

    //tratamento de erro
    const [status, setStatus] = useState({
        formSave:false,
        type: '',
        message: ''
    });

    const valorInput = e => setServico({
        ...servico, [e.target.name]: e.target.value
    });

    const cadServico = async e => {
        e.preventDefault();

        setStatus({
            formSave:true
        });

        const headers = {
            'Content-Type':'application/json' //aspas simples
        }

        await axios.post(api + "/servicos", servico,{headers}) //tem que ser o post que está no controller.js
        .then((response) => {
            if(response.data.error){
                setStatus({
                    formSave: false,
                    type:'error',
                    message: response.data.message
                });
            }else{
                setStatus({
                    formSave: false,
                    type:'success',
                    message: response.data.message
                });
            }
        })
        .catch(() => {
            setStatus({
                 formSave: false,
                type:'error',
                message: "Erro: Não foi possível se conectar a API."
            });
        });
    };

    const apagarServicos = async (idServico) => {
        console.log(idServico)

        const headers = {
            'Content-Type':'application/json'        //OK
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

    /* const [data, setData] = useState([]);
 
     const [status, setStatus] = useState({
         type: '',
         message: ''
     });
 
     
     const apagarServicos = async (idServico) => {
         console.log(idServico)
 
         const headers = {
             'Content-Type':'application/json'        OK
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
     */

    return (
        <div className="p-3">
            <Container>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""} <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Cadastrar Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizar-servico" className="btn btn-outline-primary btn-sm">Listar</Link>
                    </div>
                </div>


                {/*tratamento de erro */}
                <hr className="m-1" />

                {status.type ==='error' ? <Alert color="danger">
                    {status.message}</Alert>:""}

                {status.type === 'success' ? <Alert color="success">
                    {status.message}</Alert>:""}




                <Form className="p-2" onSubmit={cadServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome"
                            placeholder="Nome do serviço" onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="dercricao"
                            placeholder="Descrição do serviço" onChange={valorInput} />
                    </FormGroup>
                </Form>
                {status.formSave ?
                    <Button type="submit" outline color="info" disabled>Salvando...
                    <Spinner size="sm" color="info"/></Button> :
                    <Button type="submit" outline color="info">Cadastrar</Button>}

                <Button type="submit" outline color="info">Cadastrar</Button>





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
                                    <Link to={"/servico/" + item.id} className="btn btn-outline-primary btnsm">Consultar</Link>
                                    <Link to={"/editarservico/" + item.id}
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