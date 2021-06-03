
import { MODAL_HIDE, MODAL_OPEN } from '../types/types';

const initialState = {
    state: false,
    user: {}
}

export const modalReducer = (state = initialState, action) => {

    switch (action.type) {
        case MODAL_OPEN:
            return {
                state: true,
                user: action.payload
            };
        case MODAL_HIDE:
            return (
                initialState)
        default:
            return state;
    }
}