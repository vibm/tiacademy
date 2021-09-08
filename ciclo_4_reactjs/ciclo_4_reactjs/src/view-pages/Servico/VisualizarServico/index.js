// import de um {objeto} que vem de 'algum lugar';
import { Container, Table } from 'reactstrap';

export const VisualizarServico = () => {
    return (
        <div className="p-3">
            <Container>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Serviço</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>

            </Container>
        </div>
    );
};

/*<a href="/VisualizarServico" className="btn btn-outline-success btn-sm">Visualizar Servico</a>*/