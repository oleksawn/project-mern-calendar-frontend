import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import '@fontsource/roboto';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {appTheme} from './app-theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme(appTheme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
