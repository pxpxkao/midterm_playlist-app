import React, { Component } from "react";
import { Switch, Route, NavLink as RRNavLink } from "react-router-dom";
import Posts from './Posts/Posts';
import PostRender from './Posts/PostRender';
import {
    Container, Row, Col,
    Nav, NavItem, NavLink,
    Card, CardHeader
} from 'reactstrap';
export default class Blog extends Component {
    home = () => {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col className="col-8"><h3 className="text-white">Music Quotes</h3></Col>
                </Row>
                <Row className="justify-content-center">
                    <div className="docSearch-content col-8 text-center" style={{fontSize: "1.1rem"}}>
                        <Card className="text-primary">
                            <CardHeader>Music is the only the language of the universe.</CardHeader>
                        </Card>
                        <Card className="text-success">
                            <CardHeader>Music sounded, happiness flow to the face.</CardHeader>
                        </Card>
                        <Card className="text-info">
                            <CardHeader>Happy, you listen to music. Sad, you begin to understand the lyrics.</CardHeader>
                        </Card>
                        <Card className="text-warning">
                            <CardHeader>Without music, life is a mistake.</CardHeader>
                        </Card>
                        <Card className="text-danger">
                            <CardHeader>One day life will leave, but music can transcend everything.</CardHeader>
                        </Card>
                    </div>
                </Row>
            </Container>
        );
    }

    render() {
        return (
            <div>
                <section className="jumbotron-header mb-3 text-center mt-n4">
                    <h1 className="jumbotron-heading display-4 text-white">My Lyrics Blog</h1>
                    <p className="lead text-white">Post an Article to Manage your Lyrics Database</p>
                    <Container className="col-7">
                        <Nav tabs className="justify-content-center">
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to="/blog" activeClassName="active text-muted" className="text-white">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to="/blog/posts" activeClassName="active text-muted" className="text-white">Posts</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                    <Container className="mt-3 tab-content" id="pills-tabContent">
                        <Row>
                            <Col>
                                <Switch>
                                    <Route exact path="/blog" component={this.home} />
                                    <Route exact path="/blog/posts" component={Posts} />
                                    <Route path="/blog/posts/:id?" component={PostRender} />
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}
