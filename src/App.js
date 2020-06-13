import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Estilos style
import './App.css';

// Pages
import Index from './pages/index'
import Header from './components/header'


function App() {
  return (
      <Router>
        <Switch>
        <Header>
          <Route exact path="/" component={Index} />
          <Route exact path="/url-shortening-api-master" component={Index} />
        </Header>
        </Switch>
      </Router>
  );
}

export default App;
