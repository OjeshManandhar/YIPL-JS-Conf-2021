// packages
import { ApolloClient, InMemoryCache } from '@apollo/client';

// env
import { API_URI } from 'env_config';

const client = new ApolloClient({
  uri: API_URI,
  cache: new InMemoryCache()
});

export default client;
