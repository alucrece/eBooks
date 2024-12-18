import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
import bg from "../assets/bglog.jpg"

function Home() {
    return (
        <Row>
            
                <div class="blocktext" /*style={{ backgroundImage: `url(${bg})` }}*/>
                    <h1 class="item">Welcome to our instant messaging</h1>
                    
                </div>
            
           
        </Row>
    );
}

export default Home;
