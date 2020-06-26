import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";

function App() {
  return (
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/url-shortening-api-master" component={Index} />
            <Route component={NotFound} />
          </Switch>
        </Router>
  );
}

export default App;
