import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectDetails = props => {
  const [project, setProject] = useState();
  const [actions, setActions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/projects/${props.match.params.id}`)
      .then(res => {
        setProject(res.data);
        setActions(res.data.actions);
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  return (
    <div>
      {project && <h2>{project.name}</h2>}
      <ul>
        {actions &&
          actions.map(action => <li key={action.id}>{action.description}</li>)}
      </ul>
    </div>
  );
};

export default ProjectDetails;
