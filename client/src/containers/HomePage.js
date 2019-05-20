import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { IoIosMusicalNotes } from "react-icons/io";

export default class HomePage extends Component {
    render() {
        return (
            <section className="jumbotron-header mb-3 text-center text-white">
                <Container style={{marginTop: "4rem"}}>
                    <Row>
                        <Col>
                            <h1 className="jumbotron-heading display-4">Welcome to PlayList App<IoIosMusicalNotes alt width="150px"/></h1>
                            <p className="lead">Find your way to manage your music playlist</p>
                            <p>
                                <a 
                                    href="https://github.com/pxpxkao/midterm_playlist-app"
                                    className="btn btn-outline-info mr-2"
                                    style={{fontSize: "1.2rem"}}
                                >Github</a>
                                <a 
                                    href="/app/"
                                    className="btn btn-info ml-2 mr-2"
                                    style={{fontSize: "1.2rem"}}
                                >App</a>
                                <a 
                                    href="/blog/"
                                    className="btn btn-outline-info ml-2"
                                    style={{fontSize: "1.2rem"}}
                                >Blog</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}