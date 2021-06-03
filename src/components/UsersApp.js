import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';

import { addUser, showUserThunk } from '../actions';
import { User } from './users/User';
import { useForm } from '../hooks/useForm'
import { ModalAddUser } from './users/ModalAddUser';

export const UsersApp = () => {

  const { list } = useSelector(state => state.users);//Selector reemplaza a mapStatetoProps
  const { modal } = useSelector(state => state);
  const dispatch = useDispatch();//Reemplaza a dispatchtoProps
  const [values, handleInputChange] = useForm({
    name: ''
  });
  const { name } = values;

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addUser(name));
  }

  useEffect(() => {
    dispatch(showUserThunk());
  }, [])
  return (
    <div>
      <div className="container">
        <div className="mb-4">
          <h2 className="text text-center">USERS</h2>
        </div>
        <Table className="tableUsers" striped bordered hover responsive variant='dark'>
          <thead>
            <tr>
              <th>#ID</th>
              <th colSpan="3">Name</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((user, i) => {
                return <User key={i} user={user} tablePos={i + 1} />
              })
            }
          </tbody>
        </Table>
      </div>
      <div className='container mb-3 mt-3'>
        <form onSubmit={handleAdd}>
          <div className='mb-4'>
            <label className="form-label">Name</label>
            <input type="text" className="form-control " name='name' autoComplete='off' placeholder="Input a name.." onChange={handleInputChange} />
          </div>
        </form>
        <Button
          variant="info"
          onClick={handleAdd}
          color='white'
          block
        >
          Agregar
        </Button>
      </div>
      < ModalAddUser show={modal.state} onHide={() => { }} />
    </div>
  )
}





