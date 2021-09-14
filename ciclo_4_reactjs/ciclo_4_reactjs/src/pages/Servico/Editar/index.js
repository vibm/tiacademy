import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
//SPINNER NÃO IMPORTADO


export const Editar = (props) => {      //props = propriedades

    //recebe o id de um serviço específico para editá-lo
    const [id] = useState(props.match.params.id);

    const [nome, setNome] = useState(''); //o estado inicial do setNome é vazio
    const [descricao, setDescricao] = useState('');

    //tratamento de erro
    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtServico = async e => {  //e --> evento
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Editar um Serviço</h1>
                    </div>
                    <div>
                        <Link to={"/visualizar-servico/"} //Botão que leva para a lista de serviços
                            className="btn btn-outline-primary btn-sm m-1">Listar</Link>
                        <Link to={"/servico/" + id} //Botão 1 serviço ***NO APP.JS A ROTA É "/servico/:id"
                            className="btn btn-outline-primary btn-sm m-1">Consultar</Link>

                    </div>
                </div>

                {/*tratamento de erro*/}
                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger">
                    {status.message}</Alert> : ""}

                {status.type === 'success' ? <Alert color="success">
                    {status.message}</Alert> : ""}


                <Form className="p-2" onSubmit={edtServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome"
                            placeholder="Nome do serviço" />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="dercricao"
                            placeholder="Descrição do serviço" />
                    </FormGroup>

                    
                    {status.formSave ?
                        <Button type="submit" outline color="warning" disabled >Salvando...
                            <Spinner size="sm" color="warning" /></Button> :
                        <Button type="submit" outline color="warning">Salvar</Button>}


                    <Button type="reset" outline color="success">Limpar</Button>   {/*botão LIMPAR tipo "reset"*/}
                </Form>

            </Container>
        </div>
    )
}










import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"

export const Editar = () => {

    const [data, setData] = useState([]);
    const [id] = usedata(props.match.params.id);
    const [nome, setNome] = useState(''); //uma constante para cada campo do formulário (vazio), do serviço
    const [descricao, setDescricao] = useState('');

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtServico = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/editarservico", { id, name, descricao }, { headers })
            .then((response) => {
                //console.log(response.data.error);
                //console.log(response.data.message);
                if (response.data.error) {
                    setStatus({
                        formSave: false,
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        formSave: false,
                        type: 'success',
                        message: response.data.message
                    });
                }
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a API.'
                });
            });
    }

    useEffect(() => {
        const getServico = async () => {
            await axios.get(api + "/servico/" + id)
                .then((response) => {
                    //console.log(response.data.servico);
                    setNome(response.data.servico.nome);
                    setDescricao(response.data.servico.descricao);
                })
                .catch(() => {
                    console.log("Erro: Não foi posível conectar a API.")
                })
        }
        getServico();
    }, [id]);

    return (
        <div>
            <Container>
                <div>
                    <h1>Editar serviço</h1>
                </div>

                <div>
                    <Link to="/visualizar-servico"
                        className="btn btn-outline-primary btn-sm m-1"> Listar </Link>
                    <Link to={"/servico/:id" + id}
                        className="btn btn-outline-primary btn-sm m-1"> Consultar </Link>
                </div>

                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger">
                    {status.message}</Alert> : ""}

                {status.type === 'success' ? <Alert color="success">
                    {status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={edtServico}>
                    <FormGroup classname="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do serviço" value={nome}
                            onChange={e => setNome(e.target.value)} />
                    </FormGroup>

                    <FormGroup classname="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Descrição do serviço" value={descricao}
                            onChange={e => setDescricao(e.target.value)} />
                    </FormGroup>

                    {/*{status.formSave ?
                        <Button type="submit" outline color="warning" disabled>Salvando...
                            <Spinner size="sm" color="warning" /></Button> :
                        <Button type="submit" outline color="warning">Salvar</Button>}*/}
                </Form>
            </Container>
        </div>
    )
}