import { useState } from 'react';

function AddBorrowerForm({ books, onAdd }) {
  const todayStr = new Date().toISOString().slice(0,10);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bookIndex, setBookIndex] = useState('');
  const [borrowDate, setBorrowDate] = useState(todayStr);
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, email, phone, book: books[bookIndex], borrowDate, returnDate });
    setName('');
    setEmail('');
    setPhone('');
    setBookIndex('');
    setBorrowDate(todayStr);
    setReturnDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <select
        value={bookIndex}
        onChange={e => setBookIndex(e.target.value)}
        required
      >
        <option value="">Select Book</option>
        {books.map((book, idx) => (
          <option key={idx} value={idx}>
            {idx + 1}. {book.title}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={borrowDate}
        onChange={e=>setBorrowDate(e.target.value)}
        max={returnDate || undefined}
        required
        title="Borrow date"
      />
      <input
        type="date"
        value={returnDate}
        onChange={e=>setReturnDate(e.target.value)}
        min={borrowDate}
        placeholder="Return date"
        title="Planned return date"
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default AddBorrowerForm;
