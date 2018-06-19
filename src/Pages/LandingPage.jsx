import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'routes';
import { Button } from '@material-ui/core';

import Sitebar from 'Sitebar';

export default class LandingPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Sitebar />
                <div className="container">

                    <div className="row row-spaced justify-content-center text-center">
                        <span>
                            <h1 className="no-select">Paul Bayruns</h1>
                            <h3 className="faded no-select">Full Stack Developer</h3>
                        </span>
                    </div>
                    <div className="row justify-content-center">
                        <Button component={Link} to={routes.ABOUT.URL} label="About Me" primary />
                        <Button component={Link} to={routes.PROJECTS.URL} label="Projects" primary />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}