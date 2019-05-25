import {
    CLOSE_MODAL,
    FETCH_PHOTO_BY_ID_SUCCESS,
    FETCH_PHOTO_FAILURE,
    FETCH_PHOTO_SUCCESS,
    SEND_PHOTO_FAILURE
} from "../actions/photoActions";


const initialState = {
    photos: [],
    photoById: [],
    show: false,
    error: null
};

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHOTO_SUCCESS:
            return {
                ...state,
                photos: action.data
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