import { useEffect } from 'react';
import '../index.css';

function Modal({ children, onClose }) {
	useEffect(() => {
		function handleEsc(e) {
			if (e.key === 'Escape') onClose();
		}
		document.addEventListener('keydown', handleEsc);
		return () => document.removeEventListener('keydown', handleEsc);
	}, [onClose]);

	return (
		<div className="modal" onClick={onClose} aria-modal="true" role="dialog">
			<div className="modal-body" onClick={e => e.stopPropagation()}>
				<button aria-label="Close" onClick={onClose} style={{position:'absolute',top:8,right:12,fontSize:22,background:'none',border:'none',color:'#fff',cursor:'pointer'}}>&times;</button>
				{children}
			</div>
		</div>
	);
}

export default Modal;
