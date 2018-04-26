import React, { Component } from 'react';
import AppRouter from './Routing/AppRouter.jsx';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Routing/ScrollToTop';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Theme from './themes/main_theme'
// Material Design Theme Customization
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors

export default class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
                <BrowserRouter>
                    <ScrollToTop>
                        <AppRouter />
                    </ScrollToTop>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

