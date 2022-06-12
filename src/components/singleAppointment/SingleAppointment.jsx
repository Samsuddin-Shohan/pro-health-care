import React from 'react';

const SingleAppointment = ({ appointment }) => {
  const { name, email, cell, problem } = appointment;
  return (
    <tr>
      <td>{name}</td>
      <td >{email}</td>
      <td>{cell}</td>
      <td>{problem}</td>
    </tr>
  );
};

export default SingleAppointment;