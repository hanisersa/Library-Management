import '../index.css'
import AddBorrowerForm from './addborrower';  
import AddBookForm from './addbooks';
function Button({openAddBook, openAddBorrower})
{
  return(
    <div className='button-container'>
      <button onClick={openAddBook}>Add Book</button>
      <button onClick={openAddBorrower}>Add Borrower</button>
    </div> 
  )
}
export default Button;
