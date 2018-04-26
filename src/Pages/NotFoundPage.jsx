import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../Routing/constants.js';
import RaisedButton from 'material-ui/RaisedButton';
import Sitebar from '../Sitebar';

const style = {
    marginTop: "25vh",
};

const buttonStyle = {
    margin: "12px"
}


export default class NotFoundPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Sitebar />
                <div style={style} className="container">

                    <div className="row row-spaced justify-content-center text-center">
                            <h1 className="no-select">404 - Page Not Found</h1>
                    </div>
                    <div className="row justify-content-center">
                        <Link to={PAGES.LANDING.URL}>
                            <RaisedButton label="Back to home" primary={true} style={buttonStyle} />
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}