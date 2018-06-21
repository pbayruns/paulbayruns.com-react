import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from 'routes';

import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Row, Col } from 'layout';

export default class Sitebar extends React.Component {

    render() {

        return (
            <AppBar position="static">
                <Toolbar>
                    <Row left>
                        <span className="no-select hidden-under-xxs">Paul Bayruns</span>
                        <span className="no-select hidden-above-xxs hidden-under-xxxs">PB</span>
                    </Row>
                    <Row right className="float-right">
                        <Button component={NavLink} exact={true} to={routes.LANDING.URL} activeClassName="navlink-active">Home</Button>
                        <Button component={NavLink} exact={true} to={routes.ABOUT.URL} activeClassName="navlink-active">About</Button>
                        <Button component={NavLink} exact={true} to={routes.PROJECTS.URL} activeClassName="navlink-active">Projects</Button>
                    </Row>
                </Toolbar>
            </AppBar>
        )
    };
}