import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {CardColumns} from "reactstrap";

import {fetchPhotos} from "../../store/actions/photoActions";
import PhotoList from "../../components/PhotoList/PhotoList";


class Gallery extends Component {
    componentDidMount() {
        this.props.fetchPhotos();
    }

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
                            user={photo.user.displayName}
                            // click={() => this.goToArtist(artist._id)}
                        />
                    ))}
                </CardColumns>
            </Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        photos: state.photos.photos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhotos: () => dispatch(fetchPhotos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);