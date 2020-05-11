import * as React from 'react';
import { Provider } from 'react-redux';
import { Playground, store } from 'graphql-playground-react';
import { buildApolloLink } from '../utils/apollo';
import { ApolloLink } from 'apollo-link';

export const GraphQLPlayground: React.FC = () => {
  const [link, setLink] = React.useState<ApolloLink>();

  React.useEffect(() => {
    (async () => {
      setLink(await buildApolloLink());
    })();
  }, []);

  if (!link) {
    return null;
  }

  return <Provider store={store}>
    <style dangerouslySetInnerHTML={{
      __html: `
      .sc-fONwsr {
        height: calc(100vh - 200px);
      }
      .sc-EHOje {
        font-size: 0px;
      }
    `}} />
    <Playground
      endpoint="/graphql"
      createApolloLink={() => { return { link }; }}
    />
  </Provider>;
}
