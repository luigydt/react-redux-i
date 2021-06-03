import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, openModal } from '../../actions';


export const User = ({ user, tablePos }) => {

    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteUser(user.id))
    }

    const handleOpenModal = (e) => {
        e.preventDefault();
        dispatch(openModal(user));
    }

    return (
        <tr>
            <td>{tablePos}</td>
            <td colSpan='2'>{user.name}</td>
            <td width='150px'>
                <button className="btn btn-warning" style={{ marginRight: '20px', marginLeft: '15px' }} onClick={handleOpenModal}>
                    <i className="bi bi-pen-fill"></i>
                </button>
                <button className="btn btn-info" onClick={handleDelete}>
                    <i className="bi bi-x-lg"></i>
                </button>
            </td>
        </tr >
    )
}
