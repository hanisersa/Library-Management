import { useState } from 'react';

function AddBookForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [pages, setPages] = useState('');
  const [author, setAuthor] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    onAdd({ title, pages, author });
    setTitle(''); setPages(''); setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit} className="styled-form" autoComplete="off">
      <div className="field-block">
        <label htmlFor="book-title">Title</label>
        <input id="book-title" value={title} onChange={e=>setTitle(e.target.value)} placeholder="The Great Gatsby" required />
      </div>
      <div className="field-block">
        <label htmlFor="book-pages">Number Of Pages</label>
        <input id="book-pages" value={pages} onChange={e=>setPages(e.target.value)} placeholder="180" required />
      </div>
      <div className="field-block">
        <label htmlFor="book-author">Author</label>
        <input id="book-author" value={author} onChange={e=>setAuthor(e.target.value)} placeholder="Someone" required />
      </div>
      <div className="actions"><button type="submit" className="solid-btn">Save</button></div>
    </form>
  );
}

export default AddBookForm;