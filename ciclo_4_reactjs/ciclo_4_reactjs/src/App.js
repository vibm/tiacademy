import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Para cada componente criado, devo importar aqui no App.js
import {Home} from './view-pages/Home/';
import {VisualizarCliente} from './view-pages/VisualizarCliente/';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/VisualizarCliente" component={VisualizarCliente}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
