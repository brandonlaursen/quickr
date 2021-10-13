import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
// import LoginForm from './LoginForm';
import EditCar from './EditCar';
import { useShowModal } from '../../context/showModal';

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
    <>
      <button onClick={opener} className='edit'>Edit</button>
      {showModal === true && (
        <Modal onClose={closer}>
          <EditCar />
        </Modal>
      )}
    </>
  );
}

export default EditCarInfo;
