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
import { getLists, addList } from '../../actions/listActions';
import PropTypes from 'prop-types';

class ListModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newList = {
            name: this.state.name,
            songs: []
        }

        // Add list via addList action
        this.props.addList(newList);

        // Close modal
        this.toggle();
    }

    render() {
        const required = <span style={{ color: 'red' }}>*</span>;
        return (
            <div>
                { this.props.isAuthenticated ?  <Button
                    color="primary"
                    className="mr-2"
                    style={{ marginBottom: '1rem' }}
                    onClick={this.toggle}
                >
                    Add PlayList
                </Button> : <h4 className="mb-3" style={{ color: 'white' }}>Please log in to manage playlists</h4>}  

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader onClick={this.toggle}>Add Playlist</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="playlist">PlayList {required}</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="playlist"
                                    placeholder="Add playlist name"
                                    onChange={this.onChange}
                                    required
                                />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Add Playlist
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

export default connect(mappStateToProps, { getLists, addList })(ListModal);