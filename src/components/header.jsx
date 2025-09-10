import logo from '../assets/logo.png';
import '../index.css';
import { useState } from 'react';

function Header({ openAddBook, openAddBorrower, openBooksList, openBorrowersList, goHome }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu(){ setMenuOpen(false); }
  function handleAnd(fn){ fn && fn(); closeMenu(); }

  return (
    <header>
      <div className='header-container'>
        <div className='logo-container'>
          <img className='logo' src={logo} alt="Library Logo" />
          <h1><a href="#Home" onClick={(e)=>{e.preventDefault(); goHome && goHome(); closeMenu();}}>Library Management</a></h1>
        </div>
        <button className={`menu-toggle ${menuOpen?'open':''}`} aria-label="Menu" aria-expanded={menuOpen} onClick={()=>setMenuOpen(o=>!o)}>
          <span></span><span></span><span></span>
        </button>
        <div className={`mobile-menu ${menuOpen? 'open':''}`}>
          <nav>
            <ul> 
              <li className='nav'><a href="#" onClick={(e)=>{e.preventDefault(); handleAnd(openAddBorrower);}}>Add Borrower</a></li>
              <li className='nav'><a href="#" onClick={(e)=>{e.preventDefault(); handleAnd(openAddBook);}}>Add Book</a></li>
              <li className='nav'><a href="#" onClick={(e)=>{e.preventDefault(); handleAnd(openBorrowersList);}}>Borrowers List</a></li>
              <li className='nav'><a href="#" onClick={(e)=>{e.preventDefault(); handleAnd(openBooksList);}}>Books List</a></li>
              <li className='nav'><a href="#about" onClick={()=>closeMenu()}>About</a></li>
            </ul>
          </nav>
        </div>
        <div className={`menu-overlay ${menuOpen? 'show':''}`} onClick={closeMenu} />
      </div>
    </header>
  );
}

export default Header;
