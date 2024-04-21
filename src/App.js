import { Provider } from 'react-redux';
import UserComponent from './component/User';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserComponent />
      </PersistGate>
    </Provider>
  );
}

export default App;
