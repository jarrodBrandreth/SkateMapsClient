import React, { useState } from 'react';
import { MdOutlineAddBox, MdOutlineIndeterminateCheckBox } from 'react-icons/md';
import { Button } from '../Button';
import styles from './Accordion.module.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  startingState: boolean;
}

export function Accordion({ title, children, startingState }: AccordionProps) {
  const [open, setOpen] = useState(startingState);
  return (
    <div>
      <div className={styles.heading}>
        <h2>{title}</h2>
        <Button onClick={() => setOpen((open) => !open)}>
          {open ? <MdOutlineIndeterminateCheckBox size="24px" /> : <MdOutlineAddBox size="24px" />}
        </Button>
      </div>
      <div className={`${styles.content} ${open && styles.opened}`}>{children}</div>
    </div>
  );
}
