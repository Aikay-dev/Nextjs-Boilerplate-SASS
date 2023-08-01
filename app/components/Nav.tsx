'use client';

/* Core */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

/* Instruments */
import styles from '../styles/layout.module.css';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/verify' ? styles.active : ''
        }`}
        href="/verify"
      >
        Verify
      </Link>
    </nav>
  );
}
