import '../index.css';
function Button({openAddBook, openAddBorrower}) {
	return(
		<div className='button-container'>
			<button onClick={openAddBook}>Add Book</button>
			<button onClick={openAddBorrower}>Add Borrower</button>
		</div>
	);
}
export default Button;
