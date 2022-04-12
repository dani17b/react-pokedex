import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureAppStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { I18nextProvider } from "react-i18next";
import i18next from 'i18next';
import { configureI18N } from './config/I18nConfig';
import registerStore from 'cypress-redux/registerStore'

const store = configureAppStore({});
registerStore(store);

Promise.all([configureI18N()])
    .then(x=>
        {
          ReactDOM.render(
            <React.StrictMode>
              <Provider store={store}>
                <I18nextProvider i18n={i18next}>
                <App />
                </I18nextProvider>
              </Provider>
            </React.StrictMode>,
            document.getElementById('root')
          );
        });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
