import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from 'routes';
import FlatButton from 'material-ui/FlatButton';

import { AppBar, Button } from '@material-ui/core';

export default class Sitebar extends React.Component {

    render() {

        return (
            <AppBar
                title={<React.Fragment>
                    <span className="no-select hidden-under-xxs">Paul Bayruns</span>
                    <span className="no-select hidden-above-xxs hidden-under-xxxs">PB</span>
                </React.Fragment>}
                zDepth={0}
            >
                <div className="row justify-content-center navbar">
                    <NavLink to={routes.LANDING.URL} exact activeClassName="navlink-active">
                        <Button label="Home" />
                    </NavLink>
                    <NavLink to={routes.ABOUT.URL} activeClassName="navlink-active">
                        <Button label="About" />
                    </NavLink>
                    <NavLink to={routes.PROJECTS.URL} activeClassName="navlink-active">
                        <Button label="Projects" />
                    </NavLink>
                </div>
            </AppBar>
        )
    };
}