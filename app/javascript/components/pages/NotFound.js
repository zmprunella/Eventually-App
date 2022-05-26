import React, { Component } from 'react'
import { Container } from 'reactstrap'
import  NotFoundImg  from '../assets/Eventually.jpg'

class NotFound extends Component {
    render() {
        return (
            <>
            <Container>
                <img src={NotFoundImg} alt="404 Not Found" width="50%"/>
                <h1>404</h1>
                <h2>NotFound</h2>
            </Container>    
            </>
        );
    }
}

export default NotFound;