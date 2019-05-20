import React, { Component, Fragment } from 'react';
import { Collapse, ListGroup, ListGroupItem, Button, ButtonGroup, Col } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { GoTrashcan } from "react-icons/go";
import { connect } from 'react-redux';
import { getLists, deleteList, deleteSong } from '../../actions/listActions';
import PropTypes from 'prop-types';

class Songs extends Component {
    state = {
        collapse: false
    }

    static propTypes = {
        getLists: PropTypes.func.isRequired,
        deleteList: PropTypes.func.isRequired,
        deleteSong: PropTypes.func.isRequired,
        list: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getLists();
    }

    toggle = () => {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    onDeleteListClick = id => {
        this.props.deleteList(id);
    }

    onDeleteSongClick = (id, song) => {
        this.props.deleteSong(id, song);
    }

    render() {
        const { item } = this.props;
        return (
            <Fragment>
                <ButtonGroup className="d-flex">
                    <Button
                        color="secondary"
                        onClick={this.toggle}
                        style={{ marginBottom: '0.75rem', flexBasis: '100%' }}
                        block
                    >{item.name}</Button>
                    {this.props.isAuthenticated ? <Button
                        className="remove-btn float-right"
                        color="dark"
                        size="sm"
                        onClick={this.onDeleteListClick.bind(this, item._id)}
                    ><GoTrashcan /></Button> : null}
                </ButtonGroup>
                <Col xs='12'>
                    <Collapse isOpen={this.state.collapse}>
                        <ListGroup style={{marginBottom:'1rem'}}>
                            {item.songs.map(song => (
                                <Fragment>
                                <TransitionGroup className='playlist' style={{marginBottom:'-0.4rem'}}>
                                    <CSSTransition key={item._id} timeout={500} classNames="fade" >
                                        <ListGroupItem style={{ justiftyContent: "center", alignItems: "center" }}>
                                            {song}
                                            {this.props.isAuthenticated ? <Button
                                                className="float-right"
                                                style={{marginTop: '-0.2rem', marginBottom: '0.8rem'}}
                                                size="xs"
                                                onClick={this.onDeleteSongClick.bind(this, item._id, song)}
                                                close
                                            /> : null}
                                        </ListGroupItem>
                                    </CSSTransition>
                                </TransitionGroup>
                                </Fragment>))}
                        </ListGroup>
                    </Collapse>
                </Col>
            </Fragment>
        );
    }
}

const mappStateToProps = (state) => ({
    list: state.list,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mappStateToProps, { getLists, deleteList, deleteSong })(Songs);;