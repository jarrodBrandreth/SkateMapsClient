import React from 'react';

interface StarProps {
  className: string;
}
export function Star({ className }: StarProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      fill="#757575"
      stroke="#757575"
      strokeWidth={1}
    >
      <path d="m5.062 18 1.313-5.542L2 8.729l5.75-.5L10 3l2.25 5.25 5.75.479-4.375 3.729L14.938 18 10 15.062Z" />
    </svg>
  );
}
