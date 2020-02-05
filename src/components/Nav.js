import React, { useContext } from "react";
import { MovieContext } from "../movieContext";
function Nav() {
  const [movies] = useContext(MovieContext);
  return (
    <div>
      <h3>am_geek</h3>
      <p>List of movies: {movies.length}</p>
    </div>
  );
}

export default Nav;
