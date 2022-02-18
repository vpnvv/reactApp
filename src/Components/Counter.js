import React from "react";

function Counter({ ...obj }) {
//   console.log(props);
  //Destructuring
//   const { counting, color, message } = props;
console.log(obj.message);
  return (
    <div>
      <h1 style={{ color: obj.color }}>Counter is {obj.count}</h1>
      <p>
        {obj.message
          ? "counter is activated! (true)"
          : "counter note activated(false)"}
      </p>
    </div>
  );
}

export default Counter;
