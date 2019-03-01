import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Row, Col, Image, Button} from 'react-bootstrap'
import './Home.css'


 class Home extends Component {
 	render() {
 		return (
 			<div>
            <Row>
              <Jumbotron>
                 <h1>Bem-vindos  ao meu mundo!</h1>
                 <p>Construído com React.js & react-bootstrap!</p>
                 <Link to="/about">
                 <Button bsStyle="primary">About</Button>
              </Link>
              </Jumbotron>
            </Row>
            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
              	<Image src="assets/avatar2.png" className="profile-pic" />
              	<h3>Romis</h3>
              	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
              	<Image src="assets/avatar2.png" className="profile-pic" />
              	<h3>Romis</h3>
              	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
              	<Image src="assets/avatar2.png" className="profile-pic" />
              	<h3>Romis</h3>
              	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </Col>
            </Row>
           </div>
 			)
 	}
 }

export default Home;