
import './App.css';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

//Images
import temp from "./assets/images/tempImage.jpg";
import charles from "./assets/images/charles.jpg";


function App() {
  return (
    <Container>
      <Row>
        {/* This will be the nav bar */}
      </Row>
      <Row>
        {/* This will be the header */}
      </Row>
      <Row  className='about'>
        <p className='pt-2' id='brandStatement'>My design philosophy is that everyone should live, work, and play in spaces that are pleasing to them.</p>
        <p className='text-justify pt-2' id='philosophy'>
          Often times simply rearranging the furniture in a room or painting it
          can totally bring a room to life. All too often, people deny
          themsleves the pleasure of living in a designed space. They feel that
          it will be too expensive to hire a designer, or the designer will want
          the to buy new furnishings. I love to meet clients where they are and
          to work with what they have. It is important to me to work with their
          budget to make their space better, more appealing, happier, flow
          better, etc. The spaces where you spend your time should refect you
          and your interests. They should be inviting and welcoming, and you
          should look forward to spending time in them. It is my goal to create
          a space that you can identify with, that feels like you, perhaps even
          a better you!
        </p>
      </Row>
      <Row className='designer'>

      </Row>
    </Container>
  );
}

export default App;
