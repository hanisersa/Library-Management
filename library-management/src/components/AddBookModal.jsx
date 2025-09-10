import React from 'react';
import Modal from './Modal';
import AddBookForm from './addbooks';

function AddBookModal({ onAdd, onClose }) {
  return (
    <Modal title="Add Book" onClose={onClose}>
      <AddBookForm onAdd={onAdd} />
    </Modal>
  );
}

export default AddBookModal;