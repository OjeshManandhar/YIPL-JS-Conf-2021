// Next
import Head from 'next/head';

// styles
import 'styles/globals.css';

// env
import { APP_NAME } from 'env_config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
