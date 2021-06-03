import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, updateUser } from '../../actions/index'
import { useForm } from '../../hooks/useForm';

export const ModalAddUser = () => {

    const { modal } = useSelector(state => state);
    let user = modal.user;
    const dispatch = useDispatch();
    const [values, handleInputChange] = useForm({ name: '' });

    const handleClosModal = () => {
        user.name = values.name
        dispatch(updateUser(user))
        dispatch(hideModal());
    }


    return (
        <Modal
            show={modal.state}
            onHide={() => { handleClosModal }}
            animation={false}
        >
            <div className='container mb-3 mt-3'>
                <form onSubmit={handleClosModal}>
                    <div className='mb-4'>
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control " name='name' autoComplete='off' placeholder={modal.user.name} onChange={handleInputChange} />
                    </div>
                </form>
                <Button
                    variant="info"
                    onClick={handleClosModal}
                    color='white'
                    block
                    type='submit'
                >
                    Agregar
        </Button>
            </div>
        </Modal>
    );
}
