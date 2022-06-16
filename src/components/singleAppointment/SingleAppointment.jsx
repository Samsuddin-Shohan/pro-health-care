import axios from 'axios';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const SingleAppointment = ({ appointment }) => {
  const { name, email, cell, problem, _id, status } = appointment;
  const { user } = useAuth();

  const hanldeStatus = (value, id) => {
    axios.put(`https://powerful-reef-73334.herokuapp.com/status?status=${value}&id=${id}`)
      .then(res => console.log(res))
  }
  return (
    <tr>
      <td>{name}</td>
      <td >{email}</td>
      <td>{cell}</td>
      <td>{problem}</td>
      {
        user.name === 'admin' ? <td><form>
          <select onChange={(e) => hanldeStatus(e.target.value, _id)}>
            <option value={'Pending'} selected={status == 'Pending'} className='text-warning' >Pending</option>
            <option value={'Accepted'} selected={status == 'Accpted'} className='text-success' >Accepted</option>
            <option value={'Rejected'} selected={status == 'Rejected'} className='text-danger' >Rejected</option>

          </select>
        </form></td> : <td className={status == 'Accepted' ? 'text-success' : 'text-danger'} >{status}</td>
      }
    </tr>
  );
};

export default SingleAppointment;
