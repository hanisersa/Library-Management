import logo from '../assets/logo.png';
import '../index.css';
import { useState, useEffect } from 'react';

function Header({ openAddBook, openAddBorrower, openBooksList, openBorrowersList, goHome }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 600 : false);

	function closeMenu(){ setMenuOpen(false); }
	function handleAnd(fn){ fn && fn(); closeMenu(); }

	// lock scroll when menu open
	useEffect(()=>{
		if(menuOpen) document.body.classList.add('menu-open'); else document.body.classList.remove('menu-open');
		return ()=>document.body.classList.remove('menu-open');
	},[menuOpen]);

	// track viewport for conditional desktop nav render
	useEffect(()=>{
		function onResize(){
			const mobile = window.innerWidth <= 600;
			setIsMobile(mobile);
			if(!mobile) setMenuOpen(false);
		}
		window.addEventListener('resize', onResize);
		return ()=>window.removeEventListener('resize', onResize);
	},[]);

	return (
		<>
			<header>
				<div className='header-container'>
					<div className='logo-container'>
						<img className='logo' src={logo} alt="Library Logo" />
						<h1><a href="#Home" onClick={(e)=>{e.preventDefault(); goHome && goHome(); closeMenu();}}>Library Management</a></h1>
					</div>
					{!isMobile && (
						<nav className="desktop-nav">
							<ul>
								<li className='nav'><a href="#" onClick={(e)=>{e.preventDefault(); openAddBorrower && openAddBorrower();}}>Add Borrower</a></li>
								<li className='nav'><a href="#" onClick={(e)=>{e.preventDefault(); openAddBook && openAddBook();}}>Add Book</a></li>
								<li className='nav'><a href="#" onClick={(e)=>{e.preventDefault(); openBorrowersList && openBorrowersList();}}>Borrowers List</a></li>
								<li className='nav'><a href="#" onClick={(e)=>{e.preventDefault(); openBooksList && openBooksList();}}>Books List</a></li>
								<li className='nav'><a href="#about">About</a></li>
							</ul>
						</nav>
					)}
					<button className={`menu-toggle ${menuOpen?'open':''}`} aria-label="Menu" aria-expanded={menuOpen} aria-controls="mobile-drawer" onClick={()=>setMenuOpen(o=>!o)}>
						<span></span><span></span><span></span>
					</button>
				</div>
			</header>
			<div id="mobile-drawer" className={`mobile-menu ${menuOpen? 'open':''}`} aria-hidden={!menuOpen}>
				<button className={`menu-toggle ${menuOpen?'open':''}`} aria-label="Menu" aria-expanded={menuOpen} aria-controls="mobile-drawer" onClick={()=>setMenuOpen(o=>!o)}>
					<span></span><span></span><span></span>
				</button>
				<nav>
					<ul>
						<li><a href="#" onClick={(e)=>{e.preventDefault(); handleAnd(openAddBorrower);}}>Add Borrower</a></li>
						<li><a href="#" onClick={(e)=>{e.preventDefault(); handleAnd(openAddBook);}}>Add Book</a></li>
						<li><a href="#" onClick={(e)=>{e.preventDefault(); handleAnd(openBorrowersList);}}>Borrowers List</a></li>
						<li><a href="#" onClick={(e)=>{e.preventDefault(); handleAnd(openBooksList);}}>Books List</a></li>
						<li><a href="#about" onClick={closeMenu}>About</a></li>
					</ul>
				</nav>
			</div>
			<div className={`menu-overlay ${menuOpen? 'show':''}`} onClick={closeMenu} />
		</>
	);
}

export default Header;
