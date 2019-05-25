import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {CardColumns} from "reactstrap";

import {closeModal, fetchPhotoById, fetchPhotos} from "../../store/actions/photoActions";
import PhotoList from "../../components/PhotoList/PhotoList";
import Modal from "../../components/UI/Modal/Modal";
import {apiPhotos} from "../../constants";


class Gallery extends Component {
    componentDidMount() {
        this.props.fetchPhotos();
    }

    fetchPhotoById = id => {
        this.props.fetchPhotoById(id);
    };

    goToAuthorsGallery = id => {
        this.props.history.push({
            pathname: '/photos/' + id
        })
    };

    render() {
        return (
            <Fragment>
                <h1 className="mb-3">
                    Welcome to free stock photos gallery
                </h1>
                <CardColumns>
                    {this.props.photos.map(photo => (
                        <PhotoList
                            key={photo._id}
                            title={photo.title}
                            image={photo.image}
                            user={"By " + photo.user.displayName}
                            click={() => this.fetchPhotoById(photo._id)}
                            clickAuthor={() => this.goToAuthorsGallery(photo.user._id)}
                        />
                    ))}
                </CardColumns>
                <Modal show={this.props.show}
                       close={this.props.closeModal}
                >
                    {this.props.photoById ?
                        <img className="GalleryImage"
                             src={apiPhotos + this.props.photoById.image} alt="singlePhoto"/>
                        : null}
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        photos: state.photos.photos,
        show: state.photos.show,
        photoById: state.photos.photoById
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhotos: () => dispatch(fetchPhotos()),
        closeModal: () => dispatch(closeModal()),
        fetchPhotoById: id => dispatch(fetchPhotoById(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);