
import './App.css';
import { Container, Navbar, Nav, Row, Col, Image, Card } from 'react-bootstrap';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import designs from './assets/designs';

//Images
import temp from "./assets/images/tempImage.jpg";
import charles from "./assets/images/charles.jpg";


function App() {
  return (
    <Container>
      <Row className='contact'>
        <Navbar fixed='top'>
          <Nav >
            <Container className=''>
              <Row id='email-phone'>
                <Col xs={12} className='text-center'>
                  <a href="mailto:charles@charlesloyd.com"><MdEmail />charles@charlesloyd.com</a>
                </Col>
                <Col xs={12} className='text-center'>
                  <a href="tel:615-895-6196"><BsFillTelephoneFill />615.895.6196</a>
                </Col>
              </Row>



            </Container>

          </Nav>
        </Navbar>
      </Row>
      <Row className='header'>
        {/* This will be the header */}
      </Row>
      <Row className='about pt-5 pb-5'>
        <p id='brandStatement'>My design philosophy is that everyone should live, work, and play in spaces that are pleasing to them.</p>
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
      <Row className='designer pt-5 pb-5'>
        <Col lg={4} md={4} s={4} xs={8} className='offset-lg-4 offset-md-4 offset-s-4 offset-2'>
          <Image roundedCircle='true' fluid='true' src={charles} alt="Charles Loyd" />
        </Col>
        <div className='text-center'>
          <p id="designerName">CHARLES LOYD</p>
          <p id="designerSnippet">COMPANY | EDUCATION | EXPERIENCE</p>
          <br />
          <p className='text-justify'>
            Charles Loyd established his design firm, Charles Loyd Co., in 1995
            after spending several years gaining experience in the industry in
            leadership roles with other area designers.
          </p>
        </div>
        <hr id='length' />
        <Container>
          <h4>EDUCATION & ACHIEVEMENTS</h4>
          <ul>
            <li>B.F.A., Belmont University</li>
            <li>Main Street Revitalization Project - Murfreesboro, TN</li>
            <li>Parade of Homes "The Roosevelt" Keith Swafford</li>
            <li>Oaklands Decorator ShowHouse</li>
            <li>Daily News Journal Ruthies Award for Best Decorator</li>
          </ul>
        </Container>
      </Row>
      <Row className='services pt-5 pb-5'>
        <p id="clientPromise" >
          The success of space planning and consequently the entire design
          project is totally dependent on how well we have captured and
          transformed client's vision into a built reality.
          <br />
          <u>Client's wishes are the top priority</u> for our team of interior design consultants and
          client's participation is encouraged at all stages during the planning
          and implementation of the project.
        </p>
        <Container>
          <h2>OUR SERVICES</h2>
          <ul>
            <li>Concept Development</li>
            <li>Transforming the client</li>
            <li>Project timeframes / budget guidelines</li>
            <li>
              Selection of all materials, colors, lighting, artwork, furniture,
              etc...
            </li>
            <li>Project Management</li>
            <li>Procurement</li>
            <li>Space planning</li>
            <li>Customization, selection, and purchase of finishings</li>
            <li>Specialty in wood blinds</li>
          </ul>
        </Container>
      </Row>
      <Row className='designs pt-5 pb-5'>
        {designs.map((item, index) => {
          return (
            <Col md={4} s={6} xs={12} className="pt-2 pb-2">
              <Card key={index}>
                <Card.Img src={item} />
              </Card>
            </Col>
          )
        })}
      </Row>

      <Navbar>
        <Nav >
          <Container>
            <p><FaMapMarkerAlt /> P.O. Box 2045 Murfreesboro, TN 37133 </p>
          </Container>
        </Nav>
      </Navbar>
    </Container >
  );
}

export default App;
