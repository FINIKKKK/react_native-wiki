import { Navigation } from './screens/Navigation';
import { store } from './store/store';
import { Provider } from 'react-redux';
import React from 'react';

export default function App() {
  // React.useEffect(() => {
  //   (async () => {
  //     await authMiddleware();
  //   })();
  // }, []);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
