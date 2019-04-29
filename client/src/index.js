import React from 'react';
import { Provider } from 'react-redux';
import configStore from './Store/configStore';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configStore();

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
document.getElementById('root'));

registerServiceWorker();
