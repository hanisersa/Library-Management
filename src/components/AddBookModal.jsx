import Modal from './Modal';
import AddBookForm from './addbooks';

function AddBookModal({ onAdd, onClose }) {
	return (
		<Modal onClose={onClose}>
			<h2 className="modal-title">ADD A NEW BOOK</h2>
			<AddBookForm onAdd={onAdd} />
		</Modal>
	);
}

export default AddBookModal;
