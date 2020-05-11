import * as React from 'react';
import { Game } from './Game';
import { GraphQLPlayground } from './GraphQLPlayground';

export const Routes: React.FC = () => {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const onpopstate = () => {
      setPath(window.location.pathname);
    }

    window.addEventListener('popstate', onpopstate);

    return () => {
      window.removeEventListener('popstate', onpopstate);
    }
  }, []);

  switch (path) {
    case '/graphql-playground':
      return <GraphQLPlayground />;
    default:
      return <Game />;
  }
}
