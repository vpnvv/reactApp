// import {Navbar,Container,Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { FaBeer } from 'react-icons/fa';
import { BsFillAlarmFill } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import './Card.css';
import Card from './Card';
import { FaMapMarkerAlt,FaTelegramPlane,FaPhoneAlt,FaUserAlt } from "react-icons/fa";

function Ui() {
  return (
    <div>
      <Navbar bg="secondary" variant="dark">
    <Container>
      <Navbar.Brand href="#home" className='text-center'>
      <FaUserAlt className="d-inline-block align-top" style={30} />&nbsp;&nbsp;
       
      User Infromations
      </Navbar.Brand>
    </Container>
  </Navbar>

      

     

      {/* <BsFillAlarmFill/>
      <FaBeer /> */}
      <br /><br />
      {/* <FaApple className='AppleIcon'/> */}

    </div>
  );
}

export default Ui;
