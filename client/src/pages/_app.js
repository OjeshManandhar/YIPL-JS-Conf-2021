// Next
import Head from 'next/head';

// packages
import { ApolloProvider } from '@apollo/client';

// components
import Layout from 'components/Layout';

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ApolloProvider>
  );
}

export default MyApp;
