import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import Store from './models/store.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={Store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
