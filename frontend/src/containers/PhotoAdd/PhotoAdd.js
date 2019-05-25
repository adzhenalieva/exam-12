import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Form, FormGroup, Col, Button, Alert} from "reactstrap";


import FormElement from "../../components/UI/Form/FormElement";
import {sendPhoto} from "../../store/actions/photoActions";



class PhotoAdd extends Component {

    state = {
        title: '',
        image: ''
    };

    componentDidMount() {
        if (!this.props.user) {
            this.props.history.push('/login');
        }
    }

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitFormHandler = event => {
        event.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });
        this.props.sendPhoto(formData);
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })

    };

    fieldHasError = fieldName => {
        return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    };

    render() {
        return (
            <Fragment>
                {this.props.error && this.props.error.global && (
                    <Alert color="danger">
                        Check the internet connection
                    </Alert>
                )}
                <Form onSubmit={this.submitFormHandler}>
                    <h2>Load new photo</h2>
                    <FormElement
                        propertyName="title"
                        title="Title"
                        type="text"
                        value={this.state.title}
                        onChange={this.inputChangeHandler}
                        error={this.fieldHasError('title')}
                        placeholder="Enter title of the photo"
                    />
                    <FormElement
                        propertyName="image"
                        title="Image"
                        type="file"
                        onChange={this.fileChangeHandler}
                        error={this.fieldHasError('image')}
                    />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}} />
                        <Button className="ml-3" type="submit" color="primary">Publish</Button>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.photos.error,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    sendPhoto: data => dispatch(sendPhoto(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoAdd);