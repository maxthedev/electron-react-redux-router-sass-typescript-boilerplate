import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './routes'
import { store } from './store'
import { Provider } from 'react-redux'
import {
    RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);