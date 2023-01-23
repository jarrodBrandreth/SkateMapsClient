// import styles from './Dashboard.module.css';
import styles from '../../styles/PageStyles.module.css';

export function Dashboard() {
  return (
    <section className={styles.container}>
      <header className={styles.page_header}>
        <h1 className={`${styles.page_heading} ${styles.decorative}`}>Admin Dashboard</h1>
        <p className={styles.description}>Manage locations for SkateMaps</p>
      </header>

      <p> Welcome to dashboard what would you like to do ?</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eos ea adipisci beatae
        suscipit mollitia possimus eum omnis enim, dignissimos, deleniti autem ex. Illo, possimus
        animi repellat expedita quod placeat?
      </p>
    </section>
  );
}
