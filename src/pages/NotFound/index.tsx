import { Link } from 'react-router-dom';
import page_styles from '../../styles/PageStyles.module.css';

export function NotFound() {
  return (
    <section className={page_styles.container}>
      404 Not Found <Link to="/">Back To Home</Link>
    </section>
  );
}
