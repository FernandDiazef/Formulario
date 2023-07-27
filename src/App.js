import { Col, Container, Row } from 'react-bootstrap';
import { Login } from './containers/login';
import './App.css';

function App() {
  return (
    <>
    <Container className=' d-flex justify-content-end'>
      <Row>
        <Col md={6}>
        <Login />    
        </Col>
      </Row>
    </Container>
    </>

  );
}

export default App;
