import React, { useEffect } from 'react';

type Props = React.PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  ariaLabel?: string;
}>;

export const Modal: React.FC<Props> = ({ isOpen, onClose, ariaLabel = 'Modal', children }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={ariaLabel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
