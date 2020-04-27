import React from 'react';
import { Container, Row, Col } from '../components/Grid';
import ProfilePicture from "../assets/images/ProfilePicture.jpeg";
import "../assets/style/home.css"

function Home(){
    return(
    <Container>
        <Row>
            <Col size = "md-4">
                <img 
                className="center-block mt-3"
                style={{ width: "200px", margin: "0 auto", borderRadius : "5px" }}
                src = {ProfilePicture} />
            </Col>
        </Row>
        <Row>
            <Col size="md-8">
                <h2>About Me</h2>
                <p> I'm a software developer and have an interest in building solutions that leverage big data to inform organizational decision-making.
                    My previous work has focused on using data to inform federal education policy in order to advocate for greater opportunities for historically marginalized students. 
                    Furthermore, I have managed a national data collection effort to create key performance indicators in finance, 
                    operations, and academics to give educators the necessary information to make data-driven decisions to raise 
                    student achievement. </p> <br></br>
                <p> I look forward to working with you to build web solutions that help meet your organization's goals.
                    Please check back to this site as I add examples of ongoing projects.
                </p> <br></br> 
                <p>~ Moses Palacios</p>
                
            </Col>
        </Row>
    </Container>
    )
    
}


export default Home