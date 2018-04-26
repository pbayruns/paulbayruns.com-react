import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App.jsx';
import './index.css';
import './css/bootstrap-grid.min.css';

ReactDOM.render(
      <App />, document.getElementById('root'));
registerServiceWorker();