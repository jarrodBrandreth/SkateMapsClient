import { LocationsStats } from '../../components/LocationsStats';
import { useLocationsContext } from '../../context/LocationsContext';
import { MdEditLocationAlt, MdAddLocationAlt, MdLocationOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from '../../styles/PageStyles.module.css';
import dashboard_styles from './Dashboard.module.css';

export function Dashboard() {
  const { locations } = useLocationsContext();
  return (
    <section className={styles.container}>
      <header className={styles.page_header}>
        <h1 className={`${styles.page_heading} ${styles.decorative}`}>Dashboard</h1>
        <p className={styles.description}>Manage locations for SkateMaps</p>
      </header>
      <LocationsStats locations={locations} startingState={true} />
      <h2 className={dashboard_styles.sub_heading}>What would you like to do?</h2>
      <div className={dashboard_styles.actions_container}>
        <Link to="create-location" className={dashboard_styles.action}>
          <MdAddLocationAlt className={dashboard_styles.icon} />
          Create Location
        </Link>
        <Link to="edit-location" className={dashboard_styles.action}>
          <MdEditLocationAlt className={dashboard_styles.icon} />
          Edit Location
        </Link>
        <Link to="delete-location" className={dashboard_styles.action}>
          <MdLocationOff className={dashboard_styles.icon} />
          Delete Location
        </Link>
      </div>
    </section>
  );
}
