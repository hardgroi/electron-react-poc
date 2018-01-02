import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Container, Col, Row, Jumbotron, Form, FormGroup, Label, Input, Button} from 'reactstrap'

class Index extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <h2> Welcome to our Electron Application</h2>
                                <hr/>
                                <Form>
                                    <FormGroup>
                                        <Label>Username: </Label>
                                        <Input />
                                        <Label>Password: </Label>
                                        <Input />
                                    </FormGroup>
                                    <Button color="danger">Login</Button>
                                </Form>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
)