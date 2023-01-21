import React from 'react';
import styles from './Rating.module.css';
import { Star } from './Star';

interface RatingProps {
  number: number;
  setNumber?: (number: number) => void;
  className?: string;
}

export function Rating({ number, setNumber, className }: RatingProps) {
  const starNumber = [1, 2, 3, 4, 5];

  if (setNumber) {
    return (
      <div className={`${styles.container} ${className && className}`}>
        {starNumber.map((star) => {
          return (
            <button
              key={star}
              className={styles.star_container}
              onClick={() => setNumber(star)}
              type="button"
            >
              <Star className={`${styles.star} ${star > number && styles.empty}`} />
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${className && className}`}>
      {starNumber.map((star) => {
        return (
          <span key={star} className={styles.star_container}>
            <Star className={`${styles.star} ${star > number && styles.empty}`} />
          </span>
        );
      })}
    </div>
  );
}
