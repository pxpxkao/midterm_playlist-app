import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Songs from '../components/PlayList/Songs';
import { connect } from 'react-redux';
import { getLists } from '../actions/listActions';
import PropTypes from 'prop-types';

class PlayList extends Component {
    static propTypes = {
        getLists: PropTypes.func.isRequired,
        list: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getLists();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.list.lists !== this.props.list.lists) {
            return true;
        }
    }

    render() {
        const { lists } = this.props.list;
        return (
            <Container>
                {lists.map(list => (
                    <Songs item={list} />
                ))}
            </Container>
        );
    }
}

const mappStateToProps = (state) => ({
    list: state.list
});

export default connect(mappStateToProps, { getLists })(PlayList);

