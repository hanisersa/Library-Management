import '../index.css';

function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>Library Management</strong><br/>
          <span style={{opacity:.75}}>Data stored in your browser.</span>
        </div>
        <div className="social" aria-label="Social links">
          <a href="https://www.linkedin.com/in/hani-abdeldjalil-sersa-416398330/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.3 8.25h4.4V23H.3V8.25zM8.339 8.25h4.215v2.01h.06c.587-1.11 2.022-2.28 4.162-2.28 4.452 0 5.272 2.93 5.272 6.74V23h-4.4v-7.17c0-1.71-.03-3.91-2.384-3.91-2.387 0-2.752 1.86-2.752 3.78V23h-4.4V8.25z"/></svg>
          </a>
          <a href="https://github.com/hanisersa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.92.58.11.79-.25.79-.55 0-.27-.01-1.15-.02-2.09-3.2.7-3.87-1.36-3.87-1.36-.53-1.35-1.29-1.71-1.29-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.72 1.27 3.39.97.11-.76.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.98.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.75.8 1.19 1.83 1.19 3.09 0 4.43-2.71 5.41-5.29 5.69.42.36.8 1.07.8 2.16 0 1.56-.01 2.81-.01 3.19 0 .3.21.66.8.55A10.53 10.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
          </a>
        </div>
      </div>
      <div style={{marginTop:24, opacity:.55}}>© {new Date().getFullYear()} Library Management</div>
    </footer>
  );
}

export default Footer;