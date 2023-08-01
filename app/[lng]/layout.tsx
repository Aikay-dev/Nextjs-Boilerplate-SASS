/* eslint-disable @next/next/no-img-element */
/* Components */
import React from 'react';
import { dir } from 'i18next';
import Providers from '@/lib/providers';
import Nav from '../components/Nav';
import { languages } from '../i18n/settings';

/* Instruments */
import styles from '../styles/layout.module.css';
import '../styles/globals.css';
import '../../sass/main.scss';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params,
}: React.PropsWithChildren & { params: { lng: string } }) {
  return (
    <Providers>
      <html lang={params.lng} dir={dir(params.lng)}>
        <body>
          <section className={styles.container}>
            <Nav />

            <header className={styles.header}>
              <img src="/logo.svg" className={styles.logo} alt="logo" />
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
              <span className="text-red-700">Learn </span>
              <a
                className={styles.link}
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              ,<span> and </span>
              <a
                className={styles.link}
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
            </footer>
          </section>
        </body>
      </html>
    </Providers>
  );
}
