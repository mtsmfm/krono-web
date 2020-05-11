import { ApolloLink, Operation } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as ActionCable from 'actioncable';
import { ActionCableLink } from 'graphql-ruby-client';
import { setContext } from "apollo-link-context";
import { firebase } from "./firebase";

const httpLink = new HttpLink({
  uri: '/graphql',
  credentials: 'include',
  headers: {
    'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')!.getAttribute('content')
  }
});

const hasSubscriptionOperation = ({ query: { definitions } }: Operation) => {
  return definitions.some(
    ({ kind, operation }: any) => kind === 'OperationDefinition' && operation === 'subscription'
  )
}

const setAuthorizationLink = setContext(async () => ({
  headers: { authorization: `Bearer ${await firebase.auth().currentUser!.getIdToken()}` }
}));

export const buildApolloLink = async () => {
  const token = await firebase.auth().currentUser!.getIdToken();
  const protocol = window.location.protocol === "https:" ? 'wss' : 'ws'
  const cable = ActionCable.createConsumer(`${protocol}://${window.location.host}/cable?token=${token}`);
  cable.ensureActiveConnection();

  return setAuthorizationLink.concat(
    ApolloLink.split(
      hasSubscriptionOperation,
      new ActionCableLink({ cable }),
      httpLink
    )
  );
}

export const buildApolloClient = async () => {
  const link = await buildApolloLink();

  return new ApolloClient({
    link: link,
    cache: new InMemoryCache()
  });
}
