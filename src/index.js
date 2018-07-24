import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Landing from "./containers/Landing";

ReactDOM.render(<Landing />, document.getElementById('root'));
registerServiceWorker();
