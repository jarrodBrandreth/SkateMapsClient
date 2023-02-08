import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { MdLogin, MdLogout } from 'react-icons/md';
import { HiChevronDoubleUp } from 'react-icons/hi';
import { Button } from '../Button';
import styles from './Footer.module.css';
import { useLogout } from '../../hooks/useLogout';

export function Footer() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <Button className={styles.action} onClick={scrollToTop}>
        Back To Top
        <HiChevronDoubleUp />
      </Button>
      {user ? (
        <Button className={styles.action} onClick={logout}>
          <MdLogout />
          Logout
        </Button>
      ) : (
        <Link className={styles.login} to="login">
          <MdLogin />
          Login
        </Link>
      )}
    </footer>
  );
}
