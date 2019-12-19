import {
    AUTHENTICATION_REQUEST,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_ERROR
} from '../actions/sign-in';

const initialState = {
    requesting: null,
    success: null,
    error: null
};

export default function signIn (state = initialState, action) {
    const { type } = action;

    switch (type) {
        case AUTHENTICATION_REQUEST:
            return Object.assign(
                {},
                state,
                {
                    requesting: true,
                    success: null,
                    error: null
                }
            );
        case AUTHENTICATION_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    requesting: false,
                    success: true,
                    error: false
                }
            );
        case AUTHENTICATION_ERROR:
            return Object.assign(
                {},
                state,
                {
                    requesting: false,
                    success: false,
                    error: true
                }
            );
        default:
            return state;
    }
}