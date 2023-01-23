import React, { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import page_styles from '../../styles/PageStyles.module.css';

export function Login() {
  const { login, isLoading, error } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(email, password);
    return;
  };

  return (
    <section className={page_styles.container}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.form_heading}>
          <MdAccountCircle size="24px" />
          <h2>Admin</h2>
        </div>
        <p className={styles.not_admin}>
          Not admin? Check out{' '}
          <Link className={styles.link} to="/my-map">
            My Map
          </Link>{' '}
          page to create your own locations.
        </p>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <input className={styles.login_button} type="submit" value="Login" disabled={isLoading} />
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </section>
  );
}
