import React from 'react';
import { MdOutlineBookmarkAdd, MdBookmarkRemove } from 'react-icons/md';
import { useBookmark } from '../../hooks/useBookmark';
import { Button } from '../Button';

interface BookMarkProps {
  id: string;
}

export function Bookmark({ id }: BookMarkProps) {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmark(id);

  if (isBookmarked)
    return (
      <Button onClick={removeBookmark}>
        <MdBookmarkRemove color="#ffffff" size="30px" />
      </Button>
    );
  return (
    <Button onClick={addBookmark}>
      <MdOutlineBookmarkAdd color="#ffffff" size="30px" />
    </Button>
  );
}
