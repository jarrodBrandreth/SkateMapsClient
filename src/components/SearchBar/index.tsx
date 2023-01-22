import { MdOutlineSearch, MdClear } from 'react-icons/md';
import { Button } from '../Button';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export function SearchBar({ searchValue, setSearchValue }: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const loseFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') return e.currentTarget.blur();
  };

  return (
    <div className={styles.container}>
      <div className={styles.search_bar}>
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
    </div>
  );
}
