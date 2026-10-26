import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuth } from './store/user/user-thunk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuth());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>

);
