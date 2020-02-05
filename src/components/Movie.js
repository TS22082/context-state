import React from "react";

function Movie(props) {
  return (
    <div>
      <h3>
        {props.name} : {props.price}
      </h3>
    </div>
  );
}

export default Movie;
