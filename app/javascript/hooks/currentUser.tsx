import * as React from 'react';
import { firebase } from "../utils/firebase";
import Haikunator from 'haikunator';

const haikunator = new Haikunator();

type State =
  {
    loading: true;
    currentUser: undefined;
  } |
  {
    loading: false;
    currentUser: firebase.User;
  }

const Context = React.createContext<firebase.User | undefined>(undefined);

export const useCurrentUser = () => React.useContext(Context);

export const CurrentUserProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<State>({
    loading: true,
    currentUser: undefined
  });

  React.useEffect(() => {
    (async () => {
      const user = await firebase.auth().signInAnonymously();

      if (user.additionalUserInfo?.isNewUser) {
        await firebase.auth().currentUser?.updateProfile({ displayName: haikunator.haikunate() });
      }

      setState({
        currentUser: firebase.auth().currentUser!,
        loading: false
      });
    })();
  }, []);

  if (state.loading) {
    return null;
  }

  return <Context.Provider value={state.currentUser} >
    {children}
  </Context.Provider>
}
