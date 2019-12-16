import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";
import AddPost from "./components/AddPost";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProjectList} />
        <Route exact path="/details/:id" component={ProjectDetails} />
        <Route exact path="/addpost" component={AddPost} />
      </Switch>
    </div>
  );
}

export default App;
