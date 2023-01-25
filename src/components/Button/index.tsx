import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({ children, onClick, className, disabled }: ButtonProps) {
  return (
    <button
      className={className ? `${className} ${styles.button}` : styles.button}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}
