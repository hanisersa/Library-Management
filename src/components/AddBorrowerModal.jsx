import Modal from './Modal';
import AddBorrowerForm from './addborrower';

function AddBorrowerModal({ books, onAdd, onClose }) {
	return (
		<Modal onClose={onClose}>
			<h2 className="modal-title">ADD A NEW BORROWER</h2>
			<AddBorrowerForm books={books} onAdd={onAdd} />
		</Modal>
	);
}

export default AddBorrowerModal;
