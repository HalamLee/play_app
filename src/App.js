import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Playing from "./routes/Playing";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/playing/:id" component={Playing} />
    </HashRouter>
  );
}

export default App;
