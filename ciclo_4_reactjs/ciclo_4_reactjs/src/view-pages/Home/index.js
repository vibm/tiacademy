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
                        <a href="/VisualizarCliente" className="btn btn-outline-primary btn-sm">Clientes</a>
                    </div>
                    <div className="p-2">
                        <a href="/VisualizarPedido" className="btn btn-outline-primary btn-sm">Pedidos</a>
                    </div>
                    <div className="p-2">
                        <a href="/VisualizarServico" className="btn btn-outline-primary btn-sm">Serviços</a>
                    </div>
                </div>
            </Container>
        </div>
    );
};