import { MdOutlineSearch, MdClear } from 'react-icons/md';
import { Button } from '../Button';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  className?: string;
}

export function SearchBar({ searchValue, setSearchValue, className }: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const loseFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') return e.currentTarget.blur();
  };

  return (
    <div className={`${styles.search_bar} ${className && className}`}>
      <label htmlFor="search">Search</label>
      <MdOutlineSearch className={styles.search_icon} size="20px" />
      <input
        onChange={handleChange}
        onKeyUp={loseFocus}
        value={searchValue}
        type="text"
        id="search"
        name="search"
        placeholder="Search Locations"
      />
      {searchValue && (
        <Button className={styles.clear_search} onClick={() => setSearchValue('')}>
          <MdClear size="20px" />
        </Button>
      )}
    </div>
  );
}
