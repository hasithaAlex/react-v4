import React from "react";
export const Pet = props => {
  // return (
  //   <div className="lol" id="my-id">
  //     <h1>{props.name}</h1>
  //     <h1>{props.animal}</h1>
  //     <h1>{props.breed} </h1>
  //   </div>
  // );

  return (
    <div id="my-id">
      <h1>{props.name}</h1>
      <h1>{props.animal}</h1>
      <h1>{props.breed}</h1>
    </div>
  );
};
