import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../Routing/constants.js';
import RaisedButton from 'material-ui/RaisedButton';

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="display-3 text-center running-late-title">404 - Page Not Found</h1>
                    <hr className="my-2" />
                    <Link to={PAGES.LANDING.URL}><RaisedButton primary labelText="Back to Main"/></Link>
                </div>
            </div>
        );
    }
}