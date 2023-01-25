import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Button } from '../Button';
import styles from './ImageCarousel.module.css';
import { BsFillImageFill } from 'react-icons/bs';

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentShown, setCurrentShown] = useState(0);

  // when images array changes set current shown to 0
  const [prevImages, setPrevImages] = useState(images);
  if (images !== prevImages) {
    setPrevImages(images);
    setCurrentShown(0);
  }

  if (!images.length) {
    return (
      <div className={styles.container}>
        <BsFillImageFill size="240px" color="#d2d6dd" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={images[currentShown]} alt="location" loading="lazy" />
      {images.length > 1 && (
        <>
          <Button
            className={`${styles.button_icon} ${styles.prev_arrow}`}
            disabled={currentShown === 0}
            onClick={() => setCurrentShown((current) => current - 1)}
          >
            <MdChevronLeft size="28px" />
          </Button>
          <Button
            className={`${styles.button_icon} ${styles.next_arrow}`}
            disabled={images.length === 0 || currentShown === images.length - 1}
            onClick={() => setCurrentShown((current) => current + 1)}
          >
            <MdChevronRight size="28px" />
          </Button>

          <div className={styles.image_number}>
            {currentShown + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}
