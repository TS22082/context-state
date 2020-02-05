import React, { useState, useContext } from "react";
import { MovieContext } from "../movieContext";

function AddMovie() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState(0);

  const [movies, setMovies] = useContext(MovieContext);

  function updateName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function updatePrice(e) {
    e.preventDefault();
    setPrice(e.target.value);
  }

  function updateId(e) {
    e.preventDefault();
    setId(e.target.value);
  }

  function addMovie(e) {
    e.preventDefault();
    setMovies(prevMovies => [
      ...prevMovies,
      { name: name, price: price, id: id }
    ]);
  }

  return (
    <div>
      <form onSubmit={addMovie}>
        <input
          name="name"
          type="text"
          value={name}
          onChange={updateName}
        ></input>
        <input
          name="price"
          type="text"
          value={price}
          onChange={updatePrice}
        ></input>
        <input name="id" type="text" value={id} onChange={updateId}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddMovie;
