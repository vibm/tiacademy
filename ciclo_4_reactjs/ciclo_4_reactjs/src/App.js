import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Para cada componente criado, devo importar aqui no App.js
//import index.js das páginas, já que é o único arquivo lá
import { Home } from './pages/Home/'; 
import { VisualizarCliente } from './pages/Cliente/VisualizarCliente';
import { VisualizarPedido } from './pages/Pedido/VisualizarPedido';
import { VisualizarServico } from './pages/Servico/VisualizarServico';
import { Cadastrar } from './pages/Servico/Cadastrar';
import { Editar } from './pages/Servico/Editar';

import { Menu } from './components/Menu';
import { Servico } from './pages/Servico/Servico';



function App() {
  return (
    <div>
      
      <Router>
      <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/visualizar-cliente" component={VisualizarCliente} />
          <Route exact path="/visualizar-pedido" component={VisualizarPedido} />
          <Route exact path="/visualizar-servico" component={VisualizarServico} />
          <Route path="/servico/:id" component={Servico}/>
          <Route path="/cadastrar-servico" component={Cadastrar}/>
          <Route path="/editar-servico/:id" component={Editar}/>
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
