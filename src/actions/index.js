import { SHOW_USERS, ADD_USER, DELETE_USER, MODAL_OPEN, MODAL_HIDE } from "../types/types";
import axios from 'axios';

export const showUserThunk = () => {
    return (dispatch) => {

        axios.get(`http://localhost:8082/api/usuarios`)
            .then(res => {
                dispatch({
                    type: SHOW_USERS,
                    payload: res.data.usuarios
                })
            })
    }
}

export const addUser = (name) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'http://localhost:8082/api/usuarios',
            data: {
                name
            }
        })
            .then(res => {
                dispatch({
                    type: ADD_USER,
                    payload: res.data.usuario
                })
            })
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {

        axios({
            method: 'post',
            url: 'http://localhost:8082/api/usuarios',
            data: {
                name
            }
        })
            .then(res => {
                dispatch({
                    type: DELETE_USER,
                    payload: id
                })
            })
    }
}


export const updateUser = (user = {}) => {

    return (dispatch) => {
        axios({
            method: 'put',
            url: `http://localhost:8082/api/usuarios/${user.id}`,
            data: {
                name: user.name
            }
        })
            .then(res => {
                dispatch({
                    type: DELETE_USER,
                    payload: res.data.usuario
                })
            })
    }
}

export const openModal = (user) => {
    return ({
        type: MODAL_OPEN,
        payload: user
    })
}

export const hideModal = () => {
    return ({
        type: MODAL_HIDE
    })
}





