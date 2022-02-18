import { useState } from "react";
import About from "./About";
import CardBox from "./Components/Card";
import Counter from "./Components/Counter";
import Demo from "./Components/Demo";
import List from "./Components/List";
import Profile from "./Components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import "./Style.css";
import messi from "./images/messi.jpg";
import Ui from "./Components/Ui";
import Data from "./Components/Data";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const [message, setMessage] = useState(false);
  const [btnColor, setBtnColor] = useState("dark");

  let counter = () => {
    setCount(count + 10);
    setColor("blue");
    setMessage(true);
    setBtnColor("success");
  };

  let obj = {
    count,
    color,
    message,
  };

  let profile = [
    {
      no: 1,
      name: "messi",
      club: "psg",
      age: "34",
    },
    {
      no: 2,
      name: "ronaldo",
      club: "united",
      age: "36",
    },
    {
      no: 3,
      name: "haland",
      club: "bvb",
      age: "20",
    },
    {
      no: 4,
      name: "abhi",
      age: "20",
      club: "any",
    },
  ];

  let name = "messi";
  let age = 25;

  let colorName = "red";

  return (
    <div className="Main">
      <Ui />


      <Data/>
     

      {/* <List /> */}

      {/* <Profile {...profile}/> */}
      <br />
      {/* <Demo name={name} age={age} color={colorName}/> */}

      {/* <Button variant={btnColor} onClick={counter}>Counter</Button> */}
      {/* <About num={count} name={name}/> */}
      {/* <br /><br /><br /><br />
      <Card /> */}
      {/* <Counter {...obj} /> */}
      {/* <img src={messi} className='image rounded img-fluid"' alt="" /> */}
      {/* {
        profile.map((obj, index)=>{
          return(
            <p  key={index}>name: {obj.name}, age: {obj.age}, club: {obj.club}</p>

          )


        })
      } */}
    </div>
  );
}

export default App;
