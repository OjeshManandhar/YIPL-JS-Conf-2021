// Next
import Head from 'next/head';

// packages
import { ApolloProvider } from '@apollo/client';

// utils
import client from 'utils/apollo-client';

// styles
import 'styles/globals.css';

// env
import { APP_NAME } from 'env_config';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
