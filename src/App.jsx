import { useState, useEffect, useRef } from 'react';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import { BooksList, BorrowersList } from './components/lists.jsx';
import AddBookModal from './components/AddBookModal.jsx';
import AddBorrowerModal from './components/AddBorrowerModal.jsx';
import About from './components/About.jsx';
import './index.css';

export default function App() {
	// Core data
	const [books, setBooks] = useState([]);
	const [borrowers, setBorrowers] = useState([]);

	// UI state
	const [showAddBook, setShowAddBook] = useState(false);
	const [showAddBorrower, setShowAddBorrower] = useState(false);
	const [showBooksList, setShowBooksList] = useState(false);
	const [showBorrowersList, setShowBorrowersList] = useState(false);

	const booksListRef = useRef(null);
	const borrowersListRef = useRef(null);

	// Load from localStorage once
	useEffect(() => {
		try {
			const savedBooks = JSON.parse(localStorage.getItem('books') || '[]');
			const savedBorrowers = JSON.parse(localStorage.getItem('borrowers') || '[]');
			if (Array.isArray(savedBooks)) setBooks(savedBooks);
			if (Array.isArray(savedBorrowers)) setBorrowers(savedBorrowers);
		} catch { /* ignore parse errors */ }
	}, []);

	// Persist
	useEffect(() => { localStorage.setItem('books', JSON.stringify(books)); }, [books]);
	useEffect(() => { localStorage.setItem('borrowers', JSON.stringify(borrowers)); }, [borrowers]);

	function handleAddBook(book) {
		const newBook = { ...book, id: Date.now().toString() };
		setBooks(s => [newBook, ...s]);
		setShowAddBook(false);
	}

	function handleAddBorrower(borrower) {
		const newBorrower = { ...borrower, id: Date.now().toString() };
		setBorrowers(s => [newBorrower, ...s]);
		setShowAddBorrower(false);
	}

	function openBooksList() {
		setShowBorrowersList(false);
		setShowBooksList(true);
		setTimeout(()=>booksListRef.current?.scrollIntoView({behavior:'smooth'}), 50);
	}
	function openBorrowersList() {
		setShowBooksList(false);
		setShowBorrowersList(true);
		setTimeout(()=>borrowersListRef.current?.scrollIntoView({behavior:'smooth'}), 50);
	}
	function goHome(){
		setShowBooksList(false);
		setShowBorrowersList(false);
		window.scrollTo({top:0,behavior:'smooth'});
	}

	return (
		<div className="app-root">
			<Header
				openAddBook={() => setShowAddBook(true)}
				openAddBorrower={() => setShowAddBorrower(true)}
				openBooksList={openBooksList}
				openBorrowersList={openBorrowersList}
				goHome={goHome}
			/>

			<main style={{paddingTop:'5rem'}}>
				{!showBooksList && !showBorrowersList && (
					<div className="home-actions">
						<button onClick={()=>setShowAddBook(true)}>Add Book</button>
						<button onClick={()=>setShowAddBorrower(true)}>Add Borrower</button>
					</div>
				)}
				{showBooksList && (
					<div ref={booksListRef}><BooksList books={books} /></div>
				)}
				{showBorrowersList && (
					<div ref={borrowersListRef}><BorrowersList borrowers={borrowers} /></div>
				)}
				<About />
			</main>

			<Footer />

			{showAddBook && (
				<AddBookModal
					onAdd={handleAddBook}
					onClose={() => setShowAddBook(false)}
				/>
			)}
			{showAddBorrower && (
				<AddBorrowerModal
					books={books}
					onAdd={handleAddBorrower}
					onClose={() => setShowAddBorrower(false)}
				/>
			)}
		</div>
	);
}
