import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCircle } from "react-icons/fa";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";





function App() {


  let [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // console.log("Hello");

    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response);
        setdata(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoading(false);
      })

  }, []);



  return (
    <div className="App">
      <div className='header'>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">
              <div className='img_logo'>
                <img src={require('./image/logo.png')}></img>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="https://rickandmortyapi.com/documentation">Docs</Nav.Link>
                <Nav.Link href="https://rickandmortyapi.com/about">About</Nav.Link>
                <p className='btn'><Nav.Link className='btn' href="https://rickandmortyapi.com/support-us">SUPPORT US</Nav.Link></p>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <p className='title'>The Rick and Morty API</p>
      <div className='main'>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div className='inner_main'>
            {
              data.map((item, ind) => {
                return (
                  <>
                  <div className='one' key={ind}>
                    <div className='img_c'>
                      <img src={item.image}></img>
                    </div>
                    <div>
                      <div className='content'>
                        <p className='name'>{item.name}</p>
                        <div className='dead'>
                          <i className='icon' style={{ color: item.status === "Dead" ? 'red' : item.status === "unknown" ? 'grey' : 'greenyellow' }}><FaCircle></FaCircle></i>
                          <p>{item.status}-</p>
                          <p>{item.species}</p>
                        </div>
                        <p className='last'>Last known location:</p>
                        <a href='#'><p className='loc'>{item.location.name}</p></a>
                        <p className='last'>First seen in:</p>
                        <p className='look'>Look Who's Purging Now</p>
                      </div>
                    </div>
                  </div>
                  </>
                )
              })
            }
          </div>
        )}
      </div>
      <div className='footer'>
        <div className='part_f'>
          <p>CHARACTER: 826</p>
          <p>LOCATION: 126</p>
          <p>EPISODES: 51</p>
        </div>
        <p className='server'>SERVER STATUS<i className='icon icon1'><FaCircle></FaCircle></i></p>
        <div className='f_logo'>
          <div className='one1'>
            <div className='img_f'>
              <img src={require('./image/1.png')}></img>
            </div>
            <div className='one11'>
              <p className='DEPLOYS'>DEPLOYS BY</p>
              <p className='netlify'>netlify</p>
            </div>
          </div>
          <div className='one1'>
            <div className='img_f'>
              <img src={require('./image/2.png')}></img>
            </div>
            <div className='one11'>
              <p className='DEPLOYS'>POWERED BY</p>
              <p className='netlify'>Stellate</p>
            </div>
          </div>
        </div>
        <div className='icon_f'>
            <i><FaGithub></FaGithub></i>
            <i><FaTwitter></FaTwitter></i>
            <i><FaHeart></FaHeart></i>
        </div>
        <p className='last1'><i><MdKeyboardArrowLeft></MdKeyboardArrowLeft></i><i><MdKeyboardArrowRight></MdKeyboardArrowRight></i>by <font className="line">Axel Fuhrmann</font> 2024</p>
      </div>
    </div>
  );
}

export default App;
