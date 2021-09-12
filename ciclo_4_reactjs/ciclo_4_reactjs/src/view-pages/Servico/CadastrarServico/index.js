import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { api } from "../../../config";

export const Cadastrar = () => {

    const [servico, setServico] = useState({
        nome:'',
        descricao:''
    })

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const valorInput = e => setServico({...servico, [e.target.name]:e.target.value})

    const cadServico = async e => {
        e.preventDefault();
        console.log(servico);
        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api+"/servicos",servico, {headers})
        .then((response) => {
            //console.log(response.data.message);
            if(response.data.error){
                setStatus({
                    type: 'error',
                    message: response.data.message
                });
            }else{
                setStatus({
                    type: 'success',
                    message: response.data.message
                });
            }
        })
        .catch(()=>{
            setStatus({
                type: 'error',
                message: 'Erro: Sem conexão com a API.'
            });
        })
    }

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Cadastrar Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarservico" className="btn btn-outline-primary btn-sm">Listar</Link>
                    </div>
                </div>

                <hr className="m-1"/>

                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""} 

                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""} 

                <Form className="p-2" onSubmit={cadServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do serviço" onChange={valorInput} ></Input>
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Descrição do serviço" onChange={valorInput}></Input>
                    </FormGroup>
                </Form>

                <Button type="submit" outline color="info">Cadastrar</Button>

            </Container>

        </div>
    );
};