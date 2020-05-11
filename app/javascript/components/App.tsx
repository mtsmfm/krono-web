import * as React from 'react';
import { Layout } from './Layout';
import { Routes } from './Routes';
import { CurrentUserProvider } from '../hooks/currentUser';

export const App = () => {
  return <CurrentUserProvider>
    <Layout>
      <Routes />
    </Layout>
  </CurrentUserProvider>
}
