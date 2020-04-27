import React, { useState } from 'react';
import {Container, Row, Col} from '../components/Grid';
import {CardContainer, CardBody, CardHeader} from '../components/Cards'
import MyProjects from "../utils/Projects" ;
import '../assets/style/projects.css'

function Projects(){
    const [projects, setProjects] = useState(MyProjects)
    console.log(projects)
   return(
       <div>
            <Container>
                {projects.length ? (
                   <Row>
                       {projects.map(results => (
                       <Col size = "md-4">

                           <CardContainer>
                               <CardHeader>
                                   {results.title}
                               </CardHeader>
                               <img 
                               src={results.image}
                               className="center-block"
                               style={{ width: "100%", margin: "0 auto" }} />
                               <CardBody>
                                    <p className="card-text"> {results.description} </p>
                               </CardBody>
                               <CardBody>
                                    <a className="card-text ml-2" href={results.github} style={{color: "white"}} >  <i class="fab fa-github"></i> Github</a> 
                                    <a className="card-text text-center ml-4" href={results.heroku} style={{color: "white"}}>  <i class="fas fa-desktop"></i> Website</a>
                               </CardBody>
                           </CardContainer>
                       </Col>))}
                       
                   </Row>) : 
                (" ")}
                   
            </Container>
              
           
       </div>
   )
}


export default Projects