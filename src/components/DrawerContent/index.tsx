import React, { useState } from 'react';
import { ImageCarousel } from '../ImageCarousel';
import { Rating } from '../Rating';
import { MdList, MdOutlineDescription, MdOutlineImage } from 'react-icons/md';
import { Button } from '../Button';
import { Bookmark } from '../Bookmark';
import styles from './DrawerContent.module.css';

interface DrawerContentProps {
  id: string;
  images: string[];
  description: string;
  neighborhood: string;
  borough: string;
  rating: number;
}

export function DrawerContent({
  id,
  images,
  description,
  neighborhood,
  borough,
  rating,
}: DrawerContentProps) {
  const [showing, setShowing] = useState<'images' | 'info' | 'description'>('description');
  const bookmark = window.location.pathname === '/';
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {showing === 'images' && <ImageCarousel images={images} />}
        {showing === 'info' && (
          <dl className={styles.info}>
            <dt className={styles.title}>Borough</dt>
            <dd className={styles.value}>{borough}</dd>
            <dt className={styles.title}>Neighborhood</dt>
            <dd className={styles.value}>{neighborhood}</dd>
            <dt className={styles.title}>Rating</dt>
            <dd>
              <Rating number={rating} />
            </dd>
          </dl>
        )}

        {showing === 'description' && (
          <div className={styles.description}>
            <h4>Description</h4>
            <p>{description}</p>
          </div>
        )}
      </div>
      <div className={styles.overlay}>
        {bookmark && <Bookmark id={id} />}
        <Button
          className={`${styles.action} ${showing === 'description' && styles.showing}`}
          onClick={() => setShowing('description')}
        >
          <MdOutlineDescription size="30px" />
        </Button>
        <Button
          className={`${styles.action} ${showing === 'images' && styles.showing}`}
          onClick={() => setShowing('images')}
        >
          <MdOutlineImage size="30px" />
        </Button>
        <Button
          className={`${styles.action} ${showing === 'info' && styles.showing}`}
          onClick={() => setShowing('info')}
        >
          <MdList size="30px" />
        </Button>
      </div>
    </div>
  );
}
