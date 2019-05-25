import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Button, CardColumns} from "reactstrap";

import {closeModal, deletePhoto, fetchPhotoById, fetchPhotos} from "../../store/actions/photoActions";
import PhotoList from "../../components/PhotoList/PhotoList";
import Modal from "../../components/UI/Modal/Modal";
import {apiURL} from "../../constants";


class GalleryByAuthor extends Component {
    componentDidMount() {
        this.props.fetchPhotos(this.props.match.params.id);
    }

    fetchPhotoById = id => {
        this.props.fetchPhotoById(id);
    };
    deletePhoto = id => {
        this.props.deletePhoto(id).then(
            () => {
                this.props.fetchPhotos(this.props.match.params.id)
            }
        )
    };

    render() {
        let button = () => {
            //
        };
        if (this.props.user && this.props.user._id === this.props.match.params.id) {
            button = (id) => {
                return <Fragment>
                    <Button className="m-3" onClick={() => this.deletePhoto(id)}>Delete</Button>
                </Fragment>
            }
        } else {
            button = () => {
                //
            };
        }
        return (
            <Fragment>
                <h1 className="mb-3">
                    Gallery by
                </h1>
                <CardColumns>
                    {this.props.photos.map(photo => (
                        <PhotoList
                            key={photo._id}
                            title={photo.title}
                            image={photo.image}
                            user={photo.user.displayName}
                            click={() => this.fetchPhotoById(photo._id)}
                        >
                            {button(photo._id)}
                        </PhotoList>
                    ))}
                </CardColumns>
                <Modal show={this.props.show}
                       close={this.props.closeModal}
                >
                    <img style={{width: "60%", height: 600, marginLeft: 200}}
                         src={apiURL + '/uploads/photos/' + this.props.photoById.image} alt="singlePhoto"/>
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        photos: state.photos.photos,
        show: state.photos.show,
        photoById: state.photos.photoById,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhotos: (id) => dispatch(fetchPhotos(id)),
        closeModal: () => dispatch(closeModal()),
        fetchPhotoById: id => dispatch(fetchPhotoById(id)),
        deletePhoto: id => dispatch(deletePhoto(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryByAuthor);