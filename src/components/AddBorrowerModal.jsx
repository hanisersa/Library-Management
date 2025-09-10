import React from 'react';
import Modal from './Modal';
import AddBorrowerForm from './addborrower';

function AddBorrowerModal({ books, onAdd, onClose }) {
  return (
    <Modal title="Add Borrower" onClose={onClose}>
      <AddBorrowerForm books={books} onAdd={onAdd} />
    </Modal>
  );
}

export default AddBorrowerModal;