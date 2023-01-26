import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { MdLogin, MdLogout } from 'react-icons/md';
import { Button } from '../Button';
import styles from './Footer.module.css';
import { useLogout } from '../../hooks/useLogout';

export function Footer() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <footer className={styles.footer}>
      <p>some footer content</p>
      {user ? (
        <Button className={`${styles.logout} ${styles.footer_action}`} onClick={logout}>
          <MdLogout />
          Logout
        </Button>
      ) : (
        <Link className={`${styles.login} ${styles.footer_action}`} to="login">
          <MdLogin />
          Login
        </Link>
      )}
    </footer>
  );
}
