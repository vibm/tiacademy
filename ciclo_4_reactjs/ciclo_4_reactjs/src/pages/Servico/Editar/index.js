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
            'Content-Type':'application/json'
        };

        await axios.put(api+"/editarservico",{id, name, descricao}, {headers})
        .then((response)=>{
            //console.log(response.data.error);
            //console.log(response.data.message);
            if(response.data.error){
                setStatus({
                    formSave: false,
                    type: 'error',
                    message: response.data.message
                });
            }else{
                setStatus({
                    formSave: false,
                    type: 'success',
                    message: response.data.message
                });
            }
        })
        .catch(() =>{
            setStatus({
                type: 'error',
                message:'Erro: Não foi possível conectar a API.'
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
                        className="btn btn-outline-primary btn-sm mr-1"> Listar </Link>
                    <Link to={"/servico/:id" + id}
                        className="btn btn-outline-primary btn-sm mr-1"> Consultar </Link>
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
                        onChange={e => setNome(e.target.value)}/>
                    </FormGroup>

                    <FormGroup classname="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Descrição do serviço" value={descricao}
                        onChange={e => setDescricao(e.target.value)} />
                    </FormGroup>

                    {status.formSave ?
                        <Button type="submit" outline color="warning" disabled>Salvando...
                            <Spinner size="sm" color="warning" /></Button> :
                        <Button type="submit" outline color="warning">Salvar</Button>}
                </Form>
            </Container>
        </div>
    )
}