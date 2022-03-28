
import './App.css';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

//Images
import temp from "./assets/images/tempImage.jpg";


function App() {
  return (
    <Container>
      <Navbar sticky="top" className='nav'>
        <Nav>
          <Nav.Item>
            <a href="mailto:charles@charlesloyd.com"><BsFillTelephoneFill /> charles@charlesloyd.com</a>
          </Nav.Item>
          <Nav.Item>
            <a href="tel:615-895-6196"><MdEmail />615.895.6196</a>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Row className='header'>
<img src={temp} className='fluid'/>
      </Row>

    </Container>
  );
}

export default App;
