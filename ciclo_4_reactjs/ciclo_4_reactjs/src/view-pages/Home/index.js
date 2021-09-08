import { Container } from 'reactstrap';

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Home</h1>
                    </div>
                    <div className="p-2">
                        <a href="/VisualizarCliente" className="btn btn-outline-success btn-sm">Visualizar Cliente</a>
                    </div>
                    <div className="p-2">
                        <a href="/VisualizarPedido" className="btn btn-outline-success btn-sm">Visualizar Pedido</a>
                    </div>
                    <div className="p-2">
                        <a href="/VisualizarServico" className="btn btn-outline-success btn-sm">Visualizar Servico</a>
                    </div>
                </div>
            </Container>
        </div>
    );
};