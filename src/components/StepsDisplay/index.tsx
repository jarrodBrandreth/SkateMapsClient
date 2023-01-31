import React from 'react';
import { IconType } from 'react-icons';
import styles from './StepsDisplay.module.css';

interface StepsDisplayProps {
  steps: string[];
  Icons: IconType[];
  currentStep: string;
}

export function StepsDisplay({ steps, Icons, currentStep }: StepsDisplayProps) {
  const stepNumber = steps.indexOf(currentStep) + 1;

  if (!steps.length) return <></>;

  return (
    <div className={styles.container}>
      <div className={styles.line_background}></div>
      {Icons.map((Icon, index) => {
        return (
          <Icon
            key={index}
            className={`${styles.icon} ${index + 1 > stepNumber && styles.incomplete}`}
          />
        );
      })}
    </div>
  );
}
