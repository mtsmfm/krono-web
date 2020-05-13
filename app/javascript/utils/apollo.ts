import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from "apollo-link-context";
import { firebase } from "./firebase";

const httpLink = new HttpLink({
  uri: '/graphql',
  credentials: 'include',
  headers: {
    'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')!.getAttribute('content')
  }
});

const setAuthorizationLink = setContext(async () => ({
  headers: { authorization: `Bearer ${await firebase.auth().currentUser!.getIdToken()}` }
}));

export const link = setAuthorizationLink.concat(httpLink);

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});
