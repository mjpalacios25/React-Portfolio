import React from "react";
import {Container, Row, Col} from '../components/Grid';
import {NameInput, EmailInput, TextArea, FormBtn} from '../components/Form'

function Contact(){
 return(
    <Container>
        <Row>
            <Col size = "md-8">
                <form>
                    <NameInput />
                    <EmailInput />
                    <TextArea />
                    <FormBtn>Send Message</FormBtn>
                </form>
            </Col>
        </Row>
        <Row>
            <Col size="md-8">
                <div>
                    <h4>Contact Information</h4>
                    <address>
                        Moses Palacios <br></br>
                        Mobile: (202)316-0213 <br></br>
                        yup
                    </address>
                </div>
            </Col>
        </Row>
    </Container>
 )
}

export default Contact