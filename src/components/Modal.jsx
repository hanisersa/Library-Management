import React, { useEffect } from 'react';

function Modal({ title, children, onClose, closeOnBackdrop = true, closeOnEsc = true }) {
  // handle escape key
  useEffect(() => {
    if(!closeOnEsc) return;
    function handleKey(e){
      if(e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeOnEsc, onClose]);

  function handleBackdrop(e){
    if(closeOnBackdrop && e.target === e.currentTarget) onClose();
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={title} onMouseDown={handleBackdrop}>
      <div className="modal-body" style={{position:'relative'}}>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{position:'absolute', top:8, right:8, padding:'4px 8px', background:'transparent', color:'inherit', cursor:'pointer', border:'none', fontSize:'16px'}}
        >✕</button>
        <h2 style={{marginTop:0}}>{title}</h2>
        <div style={{marginTop:'12px'}}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;