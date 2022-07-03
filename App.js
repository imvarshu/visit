import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store'
import MainNavigation from './navigations/MainNavigation';

export default function App() {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <MainNavigation/>      
        </PersistGate>
    </Provider>
  );
}


