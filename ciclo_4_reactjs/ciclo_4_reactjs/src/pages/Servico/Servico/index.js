//Servico mostra um serviço
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container } from "reactstrap";
import { api } from "../../../config";

export const Servico = (props) => {
    console.log(props.match.params.id);

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    useEffect(() => {
        const getServico = async () => {
            await axios.get(api + "/servico/" + id)
                .then((response) => {
                    console.log(response.data.pedidos);
                    setData(response.data.servico);
                })
                .catch(() => {
                    console.log("Erro: Sem conexão com a API")
                })
        }
        getServico();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Serviço</h1>
                    </div>

                    <div className="p-2">
                        <Link to="/visualizar-servico" className="btn btn-outline-primary btn-sm m-1">Listar Serviços</Link>
                        <Link to={"/editar-servico/" + data.id}
                            className="btn btn-outline-warning btn-sm">Editar</Link>
                    </div>
                </div>
                <div>
                    <hr className="m-1" />
                    {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

                    <dl className="row">
                        <dt className="col-sm-3">Nome</dt>
                        <dd className="col-sm-9">{data.nome}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-3">Descrição</dt>
                        <dd className="col-sm-9">{data.descricao}</dd>
                    </dl>
                </div>
            </Container>
        </div>
    );
};