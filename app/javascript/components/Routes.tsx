import * as React from 'react';
import { Provider } from 'react-redux';
import { Playground, store } from 'graphql-playground-react';
import { link } from '../client';

export const Routes: React.FC<{ path: string }> = ({ path }) => {
  switch (path) {
    case '/graphql-playground':
      return <Provider store={store}>
        <style dangerouslySetInnerHTML={{
          __html: `
          .sc-giadOv {
            margin-top: 64px;
          }
          .sc-fONwsr {
            height: calc(100vh - 130px);
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
    default:
      return <>Hello</>;
  }
}