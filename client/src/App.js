import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";

function App(props) {
  return (
    <div className="App">
      <h1>
        <Link to="/">App</Link>
      </h1>
      <Switch>
        <Route exact path="/" component={ProjectList} />
        <Route exact path="/details/:id" component={ProjectDetails} />
      </Switch>
    </div>
  );
}

export default App;
