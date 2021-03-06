import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'routes';
import { Button } from '@material-ui/core';
import Sitebar from 'Sitebar';

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Sitebar />
                <div className="container">
                    <div className="row row-spaced justify-content-center text-center">
                            <h1 className="no-select">404 - Page Not Found</h1>
                    </div>
                    <div className="row justify-content-center">
                            <Button component={Link} to={routes.LANDING.URL} label="Back to home" primary={true} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}