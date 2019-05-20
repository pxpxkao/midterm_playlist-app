import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
    Container, Row, Col,
    ListGroup, ListGroupItem, Button
} from 'reactstrap';
import PostModal from "../../../components/Post/PostModal";
import { connect } from 'react-redux';
import { getPosts, deletePost } from '../../../actions/postActions';
import PropTypes from 'prop-types';

class Posts extends Component {
    static propTypes = {
        getPosts: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired,
        post: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getPosts();
    }

    onDeletePostClick = id => {
        this.props.deletePost(id);
    }

    render() {
        const { posts } = this.props.post;
        const lists = posts.map(post => (
            <ListGroupItem>
                <NavLink
                    to={"/blog/posts/" + post._id}
                    style={{ color: "Navy", fontSize: "1.2rem" }}
                >{post.title}</NavLink>
                {this.props.isAuthenticated ?
                <Button className="float-right" onClick={this.onDeletePostClick.bind(this, post._id)} close /> : null}
            </ListGroupItem>
        ));
        return (
            <Container className="col-8">
                <Row>
                    <Col className="col-7">
                        {posts.length?  
                        <h3 className="text-white text-left">Click to view article ---</h3>
                        : <h3 className="text-white text-left">Add some articles ---</h3> }
                    </Col>
                    <Col><PostModal /></Col>
                </Row>
                <ListGroup>
                    {lists}
                </ListGroup>
            </Container>
        )
    }
}

const mappStateToProps = (state) => ({
    post: state.post,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mappStateToProps, { getPosts, deletePost })(Posts);

