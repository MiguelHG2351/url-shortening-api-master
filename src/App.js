import React from "react";
import "./App.css";
import Index from "./pages/index";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Redux
// const initialState = {
//   urlList: []
// };

// function reducer(state, algo) {
//   return state;
// }
// const stores = createStore(reducer, initialState)

// Estilos style

// Pages

function App() {
  return (
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </Router>
  );
}

export default App;
