import Header from './components/header'
import Footer from './components/Footer';
import './index.css';
import Button from './components/Button';
import {BooksList,BorrowersList} from './components/lists';
import About from './components/About';
import AddBookModal from './components/AddBookModal';
import AddBorrowerModal from './components/AddBorrowerModal';
import { useState, useEffect } from 'react';

function App() {
 // central state
 const [books, setBooks] = useState([]);
 const [borrowers, setBorrowers] = useState([]);

 // ui state
 const [showAddBook, setShowAddBook] = useState(false);
 const [showAddBorrower, setShowAddBorrower] = useState(false);
 const [showBooksList, setShowBooksList] = useState(false);
 const [showBorrowersList, setShowBorrowersList] = useState(false);

 // add handlers with simple ids
 function handleAddBook(book) {
   const withId = { id: Date.now(), ...book };
   setBooks(prev => [...prev, withId]);
 }
 function handleAddBorrower(borrower) {
   const withId = { id: Date.now(), ...borrower };
   setBorrowers(prev => [...prev, withId]);
 }

 // persistence (optional basic)
 useEffect(()=>{
   localStorage.setItem('books', JSON.stringify(books));
 },[books]);
 useEffect(()=>{
   localStorage.setItem('borrowers', JSON.stringify(borrowers));
 },[borrowers]);
 useEffect(()=>{
   const storedBooks = JSON.parse(localStorage.getItem('books')||'[]');
   const storedBorrowers = JSON.parse(localStorage.getItem('borrowers')||'[]');
   if(storedBooks.length) setBooks(storedBooks);
   if(storedBorrowers.length) setBorrowers(storedBorrowers);
 },[]);

 function revealBooksList(){
   setShowBorrowersList(false);
   setShowBooksList(true);
   setTimeout(()=>{
     document.getElementById('books-list')?.scrollIntoView({behavior:'smooth'});
   },0);
 }
 function revealBorrowersList(){
   setShowBooksList(false);
   setShowBorrowersList(true);
   setTimeout(()=>{
     document.getElementById('borrowers-list')?.scrollIntoView({behavior:'smooth'});
   },0);
 }

 return(
   <>
   <Header 
     openAddBook={()=>{setShowAddBook(true); setShowAddBorrower(false);}}
     openAddBorrower={()=>{setShowAddBorrower(true); setShowAddBook(false);}}
     openBooksList={revealBooksList}
     openBorrowersList={revealBorrowersList}
     goHome={()=>{ 
       setShowBooksList(false); 
       setShowBorrowersList(false); 
       window.scrollTo({top:0, behavior:'smooth'}); 
     }}
   />
   <main className='main-container' id='Home'>
     <Button openAddBook={()=>{setShowAddBook(true); setShowAddBorrower(false);}} openAddBorrower={()=>{setShowAddBorrower(true); setShowAddBook(false);}} />

     {showAddBook && (
       <AddBookModal onAdd={(b)=>{handleAddBook(b); setShowAddBook(false);}} onClose={()=>setShowAddBook(false)} />
     )}
     {showAddBorrower && (
       <AddBorrowerModal books={books} onAdd={(br)=>{handleAddBorrower(br); setShowAddBorrower(false);}} onClose={()=>setShowAddBorrower(false)} />
     )}

  {showBooksList && <BooksList books={books} />}
  {showBorrowersList && <BorrowersList borrowers={borrowers} />}
  {!showBooksList && !showBorrowersList && <About />}
   </main>
  <Footer />
   </>
 )
}

export default App;