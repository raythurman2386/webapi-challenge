import React, { useState } from "react";
import axios from "axios";

const AddPost = props => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const newProject = {
      name,
      description
    };

    axios
      .post("http://localhost:4000/api/projects", newProject)
      .then(res => props.history.push("/"))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Project Name"
      />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Project Description"
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
