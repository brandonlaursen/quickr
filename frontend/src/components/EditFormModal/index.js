import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
// import LoginForm from './LoginForm';
import EditCar from './EditCar';
import { useShowModal } from '../../context/showModal';
import './EditForm.css';

function EditCarInfo() {
  // const [showModal, setShowModal] = useState()
  const { showModal, setShowModal} = useShowModal();

  const opener = () => {
    setShowModal(true)
  }

  const closer = () => {
    setShowModal(false)
  }

  return (
    <div className='modal-background'>
      <button onClick={opener} className='edit'>Edit</button>
      {showModal === true && (
        <Modal onClose={closer}>
          <EditCar />
        </Modal>
      )}
    </div>
  );
}

export default EditCarInfo;
