import React from 'react';
import { MdOutlineDescription, MdOutlineImage } from 'react-icons/md';
import { useOnOff } from '../../hooks/useOnOff';
import { Bookmark } from '../Bookmark';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { Rating } from '../Rating';
import styles from './DetailsDrawerContent.module.css';

interface DetailsDrawerContentProps {
  images: string[];
  description: string;
  neighborhood: string;
  borough: string;
  rating: number;
  id: string;
  className: string;
}

export function DetailsDrawerContent({
  className,
  id,
  images,
  description,
  neighborhood,
  borough,
  rating,
}: DetailsDrawerContentProps) {
  const { isOn, turnOn, turnOff } = useOnOff(false);
  const onLocationsPage = window.location.pathname === '/';

  return (
    <div className={`${styles.content_container} ${className && className}`}>
      <ImageCarousel images={images} />
      <div className={`${styles.description} ${isOn && styles.showing}`}>
        <h4>Description</h4>
        <Rating number={rating} />
        <p>{description}</p>
      </div>
      <div className={styles.overlay}>
        <div className={styles.locational_details}>
          <p className={styles.neighborhood}>{neighborhood}</p>
          <p className={styles.borough}>{borough}</p>
        </div>
        <span className={styles.actions}>
          {onLocationsPage && <Bookmark id={id} />}
          <Button className={`${!isOn && styles.showing}`} onClick={turnOff}>
            <MdOutlineImage size="28px" />
          </Button>
          <Button className={`${isOn && styles.showing}`} onClick={turnOn}>
            <MdOutlineDescription size="28px" />
          </Button>
        </span>
      </div>
    </div>
  );
}
