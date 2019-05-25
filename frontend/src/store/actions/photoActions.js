import axios from "../../axios-api";
import {push} from "connected-react-router";
import {NotificationManager} from 'react-notifications';

export const FETCH_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS';
export const FETCH_PHOTO_FAILURE = "FETCH_PHOTO_FAILURE";

export const FETCH_PHOTO_BY_ID_SUCCESS = "FETCH_PHOTO_BY_ID_SUCCESS";

export const SEND_PHOTO_SUCCESS = 'SEND_PHOTO_SUCCESS';
export const SEND_PHOTO_FAILURE = "SEND_PHOTO_FAILURE";

export const CLOSE_MODAL = "CLOSE_MODAL";

export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = "DELETE_FAILURE";

export const fetchPhotosSuccess = data => {
    return {type: FETCH_PHOTO_SUCCESS, data};
};
export const fetchPhotoByIdSuccess = data => {
    return {type: FETCH_PHOTO_BY_ID_SUCCESS, data};
};
const fetchPhotosFailure = error => ({type: FETCH_PHOTO_FAILURE, error});

const sendPhotoSuccess = () => ({type: SEND_PHOTO_SUCCESS});

const sendPhotoFailure = error => ({type: SEND_PHOTO_FAILURE, error});

export const closeModal = () => ({type: CLOSE_MODAL});

const deleteSuccess = () => ({type: DELETE_SUCCESS});

const deleteFailure = error => ({type: DELETE_FAILURE, error});

export const fetchPhotos = (id) => {
    return dispatch => {
        let queryParams = null;
        if (id) {
            queryParams = '/?user=';
            return axios.get('/photos' + queryParams + id).then(
                response => dispatch(fetchPhotosSuccess(response.data)),
                error => dispatch(fetchPhotosFailure(error))
            );
        }
        return axios.get('/photos').then(
            response => dispatch(fetchPhotosSuccess(response.data)),
            error => dispatch(fetchPhotosFailure(error))
        );
    };
};

export const fetchPhotoById = id => {
    return dispatch => {
        return axios.get('/photos/' + id).then(
            response => dispatch(fetchPhotoByIdSuccess(response.data)),
            error => dispatch(fetchPhotosFailure(error))
        );
    };
};

export const sendPhoto = data => {
    return dispatch => {
        return axios.post('/photos', data).then(
            () => {
                dispatch(sendPhotoSuccess());
                NotificationManager.success('Created successfully');
                dispatch(push('/'));
            },
            error => {
                if (error.response && error.response.data) {
                    dispatch(sendPhotoFailure(error.response.data));
                } else {
                    dispatch(sendPhotoFailure({global: 'No connection'}))
                }

            }
        )
    }
};

export const deletePhoto = (id) => {
    return dispatch => {
        return axios.delete('/photos/' + id).then(
            () => {
                dispatch(deleteSuccess());
                NotificationManager.success('Deleted successfully');
            },
            error => {
                if (error.response && error.response.data) {
                    dispatch(deleteFailure(error.response.data));
                } else {
                    dispatch(deleteFailure({global: 'No connection'}))
                }

            }
        )
    }
};