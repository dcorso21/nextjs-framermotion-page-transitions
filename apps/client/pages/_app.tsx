import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from './components/Header';
import './styles.css';

function CustomApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to client!</title>
      </Head>
      <main className="app">
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </main>
    </>
  );
}

export default CustomApp;
