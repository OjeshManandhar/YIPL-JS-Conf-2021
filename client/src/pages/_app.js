// Next
import Head from 'next/head';

// packages
import { ApolloProvider } from '@apollo/client';

// components
import ProtectedLayout from 'components/ProtectedLayout';

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

      {Component.name === 'Home' ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedLayout>
          <Component {...pageProps} />
        </ProtectedLayout>
      )}
    </ApolloProvider>
  );
}

export default MyApp;
