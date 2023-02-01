import React from 'react';
import { MdOutlineAddBox, MdOutlineIndeterminateCheckBox } from 'react-icons/md';
import { useOnOff } from '../../hooks/useOnOff';
import { Button } from '../Button';
import styles from './Accordion.module.css';

interface AccordionProps {
  className?: string;
  title: string;
  children: React.ReactNode;
  startingState: boolean;
}

export function Accordion({ className, title, children, startingState }: AccordionProps) {
  const { isOn, toggle } = useOnOff(startingState);
  return (
    <div className={className}>
      <div className={styles.heading}>
        <h2>{title}</h2>
        <Button onClick={toggle}>
          {isOn ? <MdOutlineIndeterminateCheckBox size="24px" /> : <MdOutlineAddBox size="24px" />}
        </Button>
      </div>
      <div className={`${styles.content} ${isOn && styles.opened}`}>{children}</div>
    </div>
  );
}
