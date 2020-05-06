import * as React from 'react';
import { Provider } from 'react-redux';
import { Playground, store, setSettingsString } from 'graphql-playground-react';

export const Routes: React.FC<{ path: string }> = ({ path }) => {
  switch (path) {
    case '/graphql-playground':
      return <Provider store={store}>
        {
          React.useEffect(() => {
            store.dispatch(
              setSettingsString(JSON.stringify({ 'request.credentials': 'include' }))
            )
          })
        }
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
          headers={{
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
          }}
        />
      </Provider>;
    default:
      return <>Hello</>;
  }
}
