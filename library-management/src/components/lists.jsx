
function BooksList({ books }) {
  return (
    <div id="books-list" className="list-section">
  <h2>Books List</h2>
      <ul>
      {books.length === 0 && <li style={{opacity:.7}}>No books yet.</li>}
      {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
        {book.pages && <p>Pages: {book.pages}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
function BorrowersList({ borrowers }) {
  return (
    <div id="borrowers-list" className="list-section">
  <h2>Borrowers List</h2>
      <ul>
          {borrowers.length === 0 && <li style={{opacity:.7}}>No borrowers yet.</li>}
      {borrowers.map((borrower) => (
          <li key={borrower.id}>
        <h3>{borrower.name}</h3>
        <p>Email: {borrower.email}</p>
        <p>Phone: {borrower.phone || '—'}</p>
              {borrower.book && borrower.book.title && (
                <p>Book: {borrower.book.title}</p>
              )}
              {borrower.borrowDate && (
                <p>Borrowed: {borrower.borrowDate}</p>
              )}
              {borrower.returnDate && (
                <p>Return: {borrower.returnDate}</p>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export { BooksList, BorrowersList };