import { LocationsStats } from '../../components/LocationsStats';
import { useLocationsContext } from '../../context/LocationsContext';
import { MdEditLocationAlt, MdAddLocationAlt, MdLocationOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from '../../styles/PageStyles.module.css';
import local_style from './Dashboard.module.css';

export function Dashboard() {
  const { locations } = useLocationsContext();
  return (
    <section className={styles.container}>
      <header className={styles.page_header}>
        <h1 className={`${styles.page_heading} ${styles.decorative}`}>Dashboard</h1>
        <p className={styles.description}>Manage locations for SkateMaps</p>
      </header>
      <LocationsStats locations={locations} startingState={true} />
      <h2 className={local_style.sub_heading}>What would you like to do?</h2>
      <div className={local_style.actions_container}>
        <Link to="create-location" className={local_style.action}>
          <MdAddLocationAlt className={local_style.icon} />
          Create Location
        </Link>
        <Link to="edit-location" className={local_style.action}>
          <MdEditLocationAlt className={local_style.icon} />
          Edit Location
        </Link>
        <Link to="delete-location" className={local_style.action}>
          <MdLocationOff className={local_style.icon} />
          Delete Location
        </Link>
      </div>
    </section>
  );
}
