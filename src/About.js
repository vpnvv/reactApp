import React from "react";
import "./Style.css";

function About(props) {
console.log('count',props);


 
  return (
    <div className="About">
      <h1 className="Head">{props.name} = {props.num}</h1>
    </div>
  );
}

export default About;
