//semelhante ao main da aplicação
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Editais from './components/pages/Editais';
import Erro404 from './components/pages/Erro404';
import Home from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/editais" component= {Editais} />
        <Route component= {Erro404} />
      </Switch>
    </BrowserRouter>  
  );
}

export default App;

//<div >  
//      <h1>Hello,world</h1> 
//      Formando campeões      
//    </div>