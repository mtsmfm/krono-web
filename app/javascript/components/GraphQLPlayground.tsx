import * as React from 'react';
import { Provider } from 'react-redux';
import { Playground, store } from 'graphql-playground-react';
import { link } from '../utils/apollo';

export const GraphQLPlayground: React.FC = () => {
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
