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
import { addPost } from '../../actions/postActions';
import PropTypes from 'prop-types';
import { IoIosAdd } from "react-icons/io";

class PostModal extends Component {
    state = {
        modal: false,
        title: '',
        lyrics: ''
    }

    static propTypes = {
        addPost: PropTypes.func.isRequired,
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

        const newPost = {
            title: this.state.title,
            lyrics: this.state.lyrics.replace(/\n/g, '<br/>')
        }

        // Add list via addList action
        this.props.addPost(newPost);

        // Close modal
        this.toggle();
    }

    render() {
        const required = <span style={{ color: 'red' }}>*</span>;
        return (
            <div>
                { this.props.isAuthenticated ?  <Button
                    className='mb-3 float-right'
                    outline color="warning"
                    onClick={this.toggle}
                >
                    <IoIosAdd size={25}/>
                </Button> : <p className="mt-1 text-info text-right">Please log in to add article</p>}  

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader onClick={this.toggle}>Add Article</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="title">Title {required}</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Title"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Label for="lyrics">Lyrics or Discription {required}</Label>
                                <Input 
                                    type="textarea" 
                                    name="lyrics" 
                                    id="lyrics" 
                                    placeholder="Paste some Lyrics or Discription you want to save..."
                                    style={{ height: "280px" }}
                                    onChange={this.onChange}
                                    required
                                />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Submit
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
    post: state.post,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mappStateToProps, { addPost })(PostModal);