import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import localEsMessages from './locales/es.json';
import localEnMessages from './locales/en.json';


const userLocale = navigator.language.startsWith("es") ? "es" : "en";
const messages = userLocale === "es" ? localEsMessages : localEnMessages;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <IntlProvider locale={userLocale} messages={messages}>
    <App />
  </IntlProvider>
</React.StrictMode>
);
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
