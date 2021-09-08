import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Para cada componente criado, devo importar aqui no App.js
import { Home } from './view-pages/Home/';
import { VisualizarCliente } from './view-pages/Cliente/VisualizarCliente';
import { VisualizarPedido } from './view-pages/Pedido/VisualizarPedido';
import { VisualizarServico } from './view-pages/Servico/VisualizarServico';

import { Menu } from './components/Menu';


function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/VisualizarCliente" component={VisualizarCliente} />
          <Route path="/VisualizarPedido" component={VisualizarPedido} />
          <Route path="/VisualizarServico" component={VisualizarServico} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
