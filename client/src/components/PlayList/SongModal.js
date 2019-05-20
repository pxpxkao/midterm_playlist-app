import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { getLists, addSongs } from '../../actions/listActions';
import PropTypes from 'prop-types';

class SongModal extends Component {
    state = {
        modal: false,
        id: '',
        song1: '',
        song2: '',
        song3: ''
    }

    static propTypes = {
        getLists: PropTypes.func.isRequired,
        addSongs: PropTypes.func.isRequired,
        list: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            id: '',
            song1: '',
            song2: '',
            song3: ''
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeSelect = e => {
        this.setState({ id: e.target.options[e.target.selectedIndex].value });
    }

    onSubmit = e => {
        e.preventDefault();
        const newSongs = {
            id: this.state.id,
            songs: [this.state.song1, this.state.song2, this.state.song3].filter(song => song !== '')
        }
        
        // Add list via addList action
        this.props.addSongs(newSongs);
        this.props.getLists();

        // Close modal
        this.toggle();
    }

    render() {
        const { lists } = this.props.list;
        const required = <span style={{ color: 'red' }}>*</span>;
        return (
            <div>
                {this.props.isAuthenticated ? <Button
                    className='ml-2'
                    color="info"
                    style={{ marginBottom: '1rem' }}
                    onClick={this.toggle}
                >
                    Add Songs
                </Button> : null}

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader onClick={this.toggle}>Add Songs to PlayList</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Select PlayList {required}</Label>
                                <Input 
                                    type="select" 
                                    name="name" 
                                    id="name" 
                                    className='mb-3'
                                    defaultValue=""
                                    onChange={this.onChangeSelect}
                                    required>
                                    <option value="" selected disabled hidden>Choose here</option>
                                    {lists.map(list => (
                                        <option value={list._id}>{list.name}</option>
                                    ))}
                                </Input>
                                <Label for="song1">Song 1 {required}</Label>
                                <Input
                                    type="text"
                                    name="song1"
                                    id="song1"
                                    className='mb-3'
                                    placeholder="Add Song1 name"
                                    onChange={this.onChange}
                                    required
                                />
                                <Label for="song2">Song 2</Label>
                                <Input
                                    type="text"
                                    name="song2"
                                    id="song2"
                                    className='mb-3'
                                    placeholder="Add Song2 name"
                                    onChange={this.onChange}
                                />
                                <Label for="song3">Song 3</Label>
                                <Input
                                    type="text"
                                    name="song3"
                                    id="song3"
                                    className='mb-3'
                                    placeholder="Add Song3 name"
                                    onChange={this.onChange}
                                />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Add Songs
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mappStateToProps = (state) => ({
    list: state.list,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mappStateToProps, { getLists, addSongs })(SongModal);