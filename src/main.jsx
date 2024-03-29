import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserAboutDataProvider } from '../src/UserDataContexts/UserAboutContext.jsx';
import { UserDataProvider } from './UserDataContexts/UserData.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserDataProvider>
      <UserAboutDataProvider>
        <App />
      </UserAboutDataProvider>
    </UserDataProvider>
  </React.StrictMode>
);
