import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProjectList = props => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {projects &&
        projects.map(project => (
          <Link to={`/details/${project.id}`} key={project.id}>
            <h3>{project.name}</h3>
          </Link>
        ))}
    </div>
  );
};

export default ProjectList;
