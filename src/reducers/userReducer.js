import { ADD_USER, SHOW_USERS, DELETE_USER, UPDATE_USER } from "../types/types"

const initialState = { list: [] };


export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_USERS:
            return {
                ...state,
                list: state.list.concat(action.payload)
            };
        case ADD_USER:
            return {
                ...state,
                list: state.list.concat(action.payload)
            };
        case DELETE_USER:
            return {
                ...state,
                list: state.list.filter(user => user.id !== action.payload)
            };
        case DELETE_USER:
            return {
                ...state,
                list: state.list.filter(user => user.id !== action.payload)
            };
        case UPDATE_USER:
            const list = state.list.map(user => {
                if (user.id === action.payload.id) {
                    user = action.payload
                }
                return user;
            })
            return {
                ...state,
                list
            }
        default:
            return state;

    }
}

