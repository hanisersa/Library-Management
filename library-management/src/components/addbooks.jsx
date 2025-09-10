import { useState } from 'react';

function AddBookForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [pages, setPages] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, pages, author });
    setTitle('');
    setPages('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        value={pages}
        onChange={e => setPages(e.target.value)}
        placeholder="Number of Pages"
        required
      />
      <input
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default AddBookForm;