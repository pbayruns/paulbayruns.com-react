import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App.jsx';
import './index.css';
import './css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CookiesProvider } from 'react-cookie';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Theme from './themes/main_theme'
// Material Design Theme Customization
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors


ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
