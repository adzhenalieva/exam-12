import {
    CLOSE_MODAL,
    FETCH_PHOTO_BY_ID_SUCCESS,
    FETCH_PHOTO_FAILURE,
    FETCH_PHOTO_SUCCESS,
    SEND_PHOTO_FAILURE, SEND_PHOTO_SUCCESS
} from "../actions/photoActions";


const initialState = {
    photos: [],
    photoById: null,
    show: false,
    error: null
};

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHOTO_SUCCESS:
            return {
                ...state,
                photos: action.data,
                error: null
            };
        case FETCH_PHOTO_BY_ID_SUCCESS:
            return {
                ...state,
                show: true,
                photoById: action.data
            };
        case SEND_PHOTO_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case SEND_PHOTO_SUCCESS:
            return {
                ...state,
                error: null,
            };
        case FETCH_PHOTO_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case CLOSE_MODAL:
            return {
                ...state,
                show: false
            };
        default:
            return state;
    }
};
export default photoReducer;