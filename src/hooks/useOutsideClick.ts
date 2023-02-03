import React, { useEffect, useRef } from 'react';

export const useOutsideClick = (callback: () => void) => {
  const ref: React.MutableRefObject<null | any> = useRef(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref,callback]);

  return ref;
};
