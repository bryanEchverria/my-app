import {useState, useEffect } from 'react';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap';
import {ThemeProvider} from 'react-bootstrap';
import  Inicio from './components/pages/Inicio'
import  TopBar from './components/shared/topBar'  
import Sidebar from './components/shared/OffCanvas'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [show, setShow] = useState(false);
  const handleShow = ()=> setShow(true);
  const handleClose = () => setShow(false);

  return (
    <ThemeProvider  className="App">
      <Container fluid>  
      <Row>
        <TopBar handleShow={handleShow} />
      </Row>
      <Row>
        <Inicio />
      </Row>
      <Sidebar  show={show}  handleClose={handleClose} handleShow={handleShow}   />
      </Container>
    </ThemeProvider>
  );
}

export default App;
 