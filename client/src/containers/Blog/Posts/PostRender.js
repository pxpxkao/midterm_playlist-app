import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Post from "../../../components/Post/Post";
import { getPosts } from '../../../actions/postActions';

class PostRender extends Component {
    static propTypes = {
        getPosts: PropTypes.func.isRequired,
        post: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts } = this.props.post;
        const postIDs = posts.map(post => post._id);
        const { id } = this.props.match.params;
        
        return id && postIDs.includes(id) ? (
            <Post id={id} item={posts.filter(post => post._id === id)[0]}/>
        ) : (
            <div className="text-white" style={{fontSize: '8px'}}>
                <h3>Error: Post #{id} NOT FOUND</h3>
            </div>
        );
    }
}

const mappStateToProps = (state) => ({
    post: state.post
});

export default connect(mappStateToProps, { getPosts })(PostRender);