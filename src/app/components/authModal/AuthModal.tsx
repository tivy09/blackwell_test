'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './AuthModal.module.scss';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: any;
}

const AuthModal = ({ isOpen, onClose, title, children }: AuthModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.customModalBackdrop} />

      <div className="modal fade show d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
