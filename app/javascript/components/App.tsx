import * as React from 'react';
import { Layout } from './Layout';
import { Routes } from './Routes';

export const App = () => {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const onpopstate = () => {
      setPath(window.location.pathname);
    }

    window.addEventListener('popstate', onpopstate);

    return () => {
      window.removeEventListener('popstate', onpopstate);
    }
  })

  return <Layout>
    <Routes path={path} />
  </Layout>
}
