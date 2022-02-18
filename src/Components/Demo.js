import React from "react";

function Demo(props) {

    console.log(props);
    let name = props.name;
  
  return (
    <div>
      <h1>hlo my name is {name}</h1>
      <p style={{color: props.color}}>age is {props.age}</p>
    </div>
  );
}

export default Demo;
