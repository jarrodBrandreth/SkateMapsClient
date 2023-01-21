import React, { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import styles from './StepsDisplay.module.css';

interface StepsDisplayProps {
  steps: string[];
  Icons: IconType[];
  currentStep: string;
}

export function StepsDisplay({ steps, Icons, currentStep }: StepsDisplayProps) {
  const [stepNumber, setStepNumber] = useState<number>(0);

  useEffect(() => {
    const index = steps.indexOf(currentStep);
    setStepNumber(index + 1);
  }, [currentStep, steps]);

  // if passed an empty array return empty fragment
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
